import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Header from "./component/Header";
import Dashbord from "./pages/Dashbord";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useState } from 'react';

function App() {
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("user")))
  const ProtectedRoute = ({ auth, childern }) => {
    if (auth === false) return <Navigate to="/login" replace />
    return childern ? childern : <Outlet />
  }

  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route element={<ProtectedRoute auth={user !== null} />} >
          <Route path="/" element={<Dashbord />} />
          </Route>
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
