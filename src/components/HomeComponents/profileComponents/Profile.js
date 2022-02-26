import React, {useEffect} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'
import Form from "./Form"
import UserInfo from "./UserInfo"
import Posts from "./Postes"
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {CheckToken} from "../../../redux/actionCreators/authActionCreators"

function Profile() {
  const username = useSelector(state => state.user.user.username)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    if(!token) {
      navigate('../register');
    }else if (!username) {
      dispatch(CheckToken(token));
    }
  })
  return (
    <div className='vh-100'>
      <div className='bg-dark text-light'>
        <UserInfo />  
      </div>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-lg-4'>
            <div className="sticky-lg-top">
              <Form  />
            </div>
          </div>
          <div className='col-12 col-lg-8'>
            <Posts />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile