import React, {useEffect} from 'react';
import Poste from "./Poste";
import {requestMyPostes} from "../../../redux/actionCreators/myPostesActionCreator";
import {useSelector, useDispatch} from "react-redux";

function Postes() {
  const dispatch = useDispatch();
  const error = useSelector(state => state.mypostes.errorMSG);
  const user = useSelector(state => state.user.user.username);
  const postes = useSelector(state => state.mypostes.postes);

  useEffect(() => {
    dispatch(requestMyPostes());  
  }, [dispatch])

  if (error) return <div className="alert alert-danger shadow-lg" role="alert">{error}</div>;
  if (postes.length === 0) return <div className="alert alert-primary shadow-lg text-center" role="alert">Create a new post to see it here!</div>;

  return (
    <div id="my-postes-grid-container">
      {
        postes.map(element => {
          return (<Poste likeCounter={element.likeCounter} picture={element.picture} user={user} key={element._id} id={element._id} date={element.createdAT} body={element.body} title={element.title} />)
      })
    }
    </div>
  )
}

export default Postes