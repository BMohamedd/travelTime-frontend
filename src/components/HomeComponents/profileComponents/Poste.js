import React from 'react'
import Creator from './Creator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, likePostAction } from '../../../redux/actionCreators/myPostesActionCreator'

function Poste({title, picture, user, id, date, body, likeCounter}) {
  const dispatch = useDispatch();
  const liking = useSelector(state => state.mypostes.likingId);
  const handleDelete = () => {
    dispatch(deletePost(id))
  }

  const handleLike = () => {
    dispatch(likePostAction(id))
  }
  

   return (
    <div className='card shadow-lg text-start width-auto mb-5'>
        <Creator user={user} date={date}  id={id}/> 
        <h5 className='ms-3'>{title}</h5>
        <p className='w-75 ms-3'>{body}</p>
        <div className='text-center'>
        <img className='rounded img-fluid' src={picture || `https://picsum.photos/${Math.floor((Math.random() * 1500) + 1000)}`} alt='post' />
        </div>
        <p className='mt-3 ms-3'>{likeCounter === 1? likeCounter + " like": likeCounter + " likes" }</p>
        <hr />
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
    </div>
  )
}

export default Poste