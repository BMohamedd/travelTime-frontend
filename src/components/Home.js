import React, {useEffect} from 'react';
import Navbar from "./Navbar"
import { Routes, Route, useNavigate} from "react-router-dom";
import Profile from "./HomeComponents/profileComponents/Profile";
import Browse from './HomeComponents/Browse';
import {useDispatch, useSelector} from "react-redux";
import {CheckToken} from "../redux/actionCreators/authActionCreators"


function Home() {
  const token = useSelector(state => state.user.token);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(!token) {
      navigate('../register');
    }else if (!user) {
      dispatch(CheckToken(token));
    }
  }, [token, dispatch, navigate, user]);
  
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path={"profile"} element={ <Profile /> }/>
      <Route path={"*"} element={ <Browse /> }/>
    </Routes>
      </div>
  )
}

export default Home