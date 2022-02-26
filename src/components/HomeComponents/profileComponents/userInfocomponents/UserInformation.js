import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faCake, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import Modal from './Modal';

function UserInformation({info, user}) {

  const gif = (info[6] === "male") ? "https://cdn.pixilart.com/photos/large/deef9852d2c37b4.gif": "https://64.media.tumblr.com/d0142ef73f7a3b1a0015c076a88f522d/tumblr_ovpo8pY9Te1r37qfvo2_400.gifv";

  return (
    <div className='h-100 container py-3'>
      <div className='h-100 d-flex flex-column flex-sm-row'> 
      <div id="user-meta-data" className='text-center text-sm-start d-flex flex-column flex-sm-row align-items-center h-100 w-100 col'>
        <img className='rounded' style={{'maxWidth': "200px", "height": "auto"}} src={gif} alt="profile pic" />
        <div className='ms-3'>
          <h1>{user}</h1>
          <p className='fw-bolder'>{info[5]}</p>
          <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={faLocationDot} size='1x' />
          <p className='m-0 ms-2'>From <i className='fw-bold'>{info[2]}, {info[1]} </i> </p>
          </div>
          <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={faCake} size='1x' />
          <p className='m-0 ms-2'>currently <i className='fw-bold'>{info[3]} years old. </i> </p>
          </div>
          <div className='d-flex align-items-center'>
          <FontAwesomeIcon icon={faGraduationCap} size='1x' />
          <p className='m-0 ms-2'>went to <i className='fw-bold'>{info[4]}. </i> </p>
          </div>
      </div>
      </div>
      <div className='align-self-center mt-2 align-self-sm-start m-sm-0'>
        <Modal />
      </div>
      </div>
    </div>
  )
}

export default UserInformation