import React from 'react'
import { useState } from 'react'
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../util/Loading'
import H_AddGoals from '../hook/goals/H_AddGoals'
import H_GetGoals from '../hook/goals/H_GetGoals'
import { useDispatch } from 'react-redux';
import { DELETE_Goals } from '../redux/S_Goals';
import { Modal , Button } from 'react-bootstrap';
import H_PUTGoals from '../hook/goals/H_PUTGoals';

const Dashbord = () => {
  const [showDelete, setshowDelete] = useState(false)
  const dispatch = useDispatch()
  const [user , name , setname , handleSub] = H_AddGoals()
  const [load, goals] = H_GetGoals()
  const [setGoalID, setnamePut, namePut, handlePut] = H_PUTGoals()
  


  const handleDel = async(e) => {
    await dispatch(DELETE_Goals(e._id))
    toast.success("تم حذف الهدف بنجاح")
    setTimeout(() => {
      window.location.reload(false)
    }, 1000);
  }

  return (
    <>
            <Modal show={showDelete}  onHide={_=> setshowDelete(!showDelete)}>
        <Modal.Header> <Modal.Title> <div className="font"> تأكيد التعديل</div>{" "} </Modal.Title> </Modal.Header>
        <Modal.Body>
          <input className='put' type="text" placeholder='ادخل تعديل هدفك' value={namePut} onChange={e=> setnamePut(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button className="font" variant="success" onClick={_=> setshowDelete(!showDelete)} >تراجع</Button>
          <Button className="font" variant="success" onClick={handlePut} >تعديل </Button>
        </Modal.Footer>
      </Modal>


    <div className='dashbord'>
      <h2>Welcome <span> {user && user.name}</span></h2>
      <p>Goals Dashboard</p>
      <input type="text" value={name} onChange={e=> setname(e.target.value)} placeholder='Insert Goal' />
      <button onClick={handleSub}>Add Goal </button>
      </div>
      <div className='data'>
        {
          load === false ?
            goals && goals.data.length > 0
            ? goals.data.map((e, index) => (
              <div key={index} className='show-goals'>
                <h2>{e.text}
                  <span>{new Date(e && e.updatedAt).toLocaleString('en-US').split(",")[1]}</span> </h2>
                <div className='icon'> 
                  <i onClick={_ => handleDel(e)} className="fa-solid fa-trash"></i>
                  
                  <i onClick={_ => {
                    setGoalID(e && e._id)
                    setshowDelete(!showDelete)
                  }} className="fa-solid fa-pen-to-square"></i></div>
              </div>))
              : <h3 className='not'>لا يوجد اهداف تم اضافتها حتي الان</h3>
          : <Loading />
        }
        </div>
      <ToastContainer />
      </>
  )
}

export default Dashbord