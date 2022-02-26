import React from 'react'
import { Routes, Route} from "react-router-dom";
import Login from './Login';
import RegisterForm from './RegisterForm';

function Register() {

  return (
    <Routes>
      <Route path="/create-a-new-account" element={<RegisterForm />} />
      <Route path="/*" element={<Login />} />
    </Routes>
    )
  }
  
  export default Register
