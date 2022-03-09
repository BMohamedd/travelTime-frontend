import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import {useSelector } from 'react-redux'


function PostButtons({handleDelete, handleLike, browse}) {
    const liking = useSelector(state => state.mypostes.likingId);
    if(browse){
        return (
            <div className='d-flex justify-content-center mb-3'>
                  <button className='d-flex align-items-center btn btn-outline-secondary' onClick={handleLike} disabled={liking ? true: false}>
                    <FontAwesomeIcon  icon={faThumbsUp} size='1x'  />
                    <p className='fw-bold m-0 ms-2'>Like</p>
                  </button>
            </div>
          )
    }
  return (
    <div className='d-flex justify-content-evenly mb-3'>
          <button className='d-flex align-items-center btn btn-outline-secondary' onClick={handleLike} disabled={liking ? true: false}>
            <FontAwesomeIcon  icon={faThumbsUp} size='1x'  />
            <p className='fw-bold m-0 ms-2'>Like</p>
          </button>
          <div className='d-flex align-items-center btn btn-outline-danger' onClick={handleDelete}>
            <FontAwesomeIcon  icon={faTrash} size='1x'  />
            <p className='fw-bold m-0 ms-2'>delete</p>
          </div>
    </div>
  )
}

export default PostButtons