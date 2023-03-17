import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../config/API";


const config = {
  headers :{Authorization : `Bearer ${localStorage.getItem("token") ? localStorage.getItem("token")  : null}`}
}

export const GET_Goals = createAsyncThunk("GET/Goals", async () => {
  return baseURL.get(`/api/goals`,config).then(res => res.data).catch(err=> err.response.data)
})

export const POST_Goals = createAsyncThunk("POST/Goals", async (send) => {
  return baseURL.post(`/api/goals`,send,config).then(res => res.data).catch(err=> err.response.data)
})

export const DELETE_Goals = createAsyncThunk("DELETE/Goals", async (id) => {
  return baseURL.delete(`/api/goals/${id}`,config).then(res => res.data).catch(err=> err.response.data)
})
export const PUT_Goals = createAsyncThunk("PUT/Goals", async ({id , ...send}) => {
  return baseURL.put(`/api/goals/${id}` , send ,config).then(res => res.data).catch(err=> err.response.data)
})


const SliceGoals = createSlice({
  name: "Goals",
  initialState: {},
  reducers: {},
  extraReducers: {
    [POST_Goals.pending]:(state)=> {state.load = true},
    [POST_Goals.fulfilled]: (state, action) => {
      state.load = false
      state.goals = action.payload
    },
    [POST_Goals.rejected]: (state, action) => {
      state.load = false
      state.goals = action.payload
    },


    [GET_Goals.pending]:(state)=> {state.load = true},
    [GET_Goals.fulfilled]: (state, action) => {
      state.load = false
      state.goals = action.payload
    },
    [GET_Goals.rejected]: (state, action) => {
      state.load = false
      state.goals = action.payload
    },


    [PUT_Goals.pending]:(state)=> {state.load = true},
    [PUT_Goals.fulfilled]: (state, action) => {
      state.load = false
      state.goals = action.payload
    },
    [PUT_Goals.rejected]: (state, action) => {
      state.load = false
      state.goals = action.payload
    },
  }
})

export default SliceGoals.reducer