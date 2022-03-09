import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEllipsis, faCalendar } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import {useDispatch} from "react-redux";
import {editPost} from "../../../redux/actionCreators/myPostesActionCreator";

function Creator({user, date, id, browse}) {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editPost(id));
  }
  if(browse) {
    return (
      <div className='d-flex align-items-center justify-content-between'>
          <div className='d-flex align-items-center m-3'>
              <FontAwesomeIcon  icon={faUser} size='2x' />
              <div className='text-start mx-2'>
                  <h4 className='m-0 '>{user}</h4>
                  <p className='m-0 text-primary'><FontAwesomeIcon  icon={faCalendar} size='1x' /> {moment(date).fromNow()} </p>
              </div>
          </div>
      </div>
    )
  }
  return (
    <div className='d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center m-3'>
            <FontAwesomeIcon  icon={faUser} size='2x' />
            <div className='text-start mx-2'>
                <h4 className='m-0 '>{user}</h4>
                <p className='m-0 text-primary'><FontAwesomeIcon  icon={faCalendar} size='1x' /> {moment(date).fromNow()} </p>
            </div>
        </div>

        <div className='me-3' onClick={handleEdit}>
        <FontAwesomeIcon  icon={faEllipsis} size='2x'  />
        </div>
    </div>
  )
}

export default Creator