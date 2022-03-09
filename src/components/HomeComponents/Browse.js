import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {requestBrowsePostes, requestMoreBrowsePostes} from "../../redux/actionCreators/browseActionCreator";
import Loading from './Loading';
import Poste from "./profileComponents/Poste"
import Error from './Error';
import CodeAndBugReport from './CodeAndBugReport';

function Browse() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.browse.errorMSG);
  const postes = useSelector(state => state.browse.postes);
  const loading = useSelector(state => state.browse.loading);
  useEffect(() => {
      dispatch(requestBrowsePostes());  
      return () => {
        dispatch({type: "CLEAN_POSTES"})
      }
  }, [dispatch])

  const handleMore = () => {
    dispatch(requestMoreBrowsePostes());  
  }

  if (loading) return (
    <div className='vh-100'>
      <Loading />
    </div>
  )
  if (error) return (
    <div className='vh-100'>
      <Error msg={error} />
    </div>
    )
  return (
    <div className="container">
      <div className='row d-flex flex-column align-items-center'>
      <div className='col-12 col-md-10 col-lg-8 mt-5 d-flex flex-column justify-content-center align-items-center'>
      <CodeAndBugReport />
        {
          postes.map(element => {
            return (<Poste likeCounter={element.posts.likeCounter} picture={element.posts.picture} user={element.username} key={element.posts._id} id={element.posts._id} userId={element._id} date={element.posts.createdAT} body={element.posts.body} title={element.posts.title} browse={true} />)
        })
      }
      </div>
      <button className='mb-5 btn btn-outline-primary w-25' onClick={handleMore}> View more </button>
      </div>
    </div>
  )
}

export default Browse
  