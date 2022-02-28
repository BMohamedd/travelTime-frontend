import React, {useState, useEffect} from 'react';
import Filebase from "react-file-base64";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {createNewPost, editCurrentPost} from "../../../redux/actionCreators/FormActionCreators";
import "./../css/form.css"

function Form() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.form.loading);
    const error = useSelector(state => state.form.errorMSG);
    const editing = useSelector(state => state.form.editing);
    const postToEdit = useSelector(state => state.form.post);
    const [postData, setPostData] = useState({
        title: "", discription: "", picture: ""
    });

    useEffect(() => {
        if(editing) {
            setPostData({title: postToEdit.title, discription: postToEdit.body, picture: ""});
        }
    }, [editing, postToEdit.body, postToEdit.title]);

    const clear = () => {
        setPostData({...postData,
            title: "",
            discription: "",
            picture: ""
        });
        dispatch({type: "STOP_EDITING"})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(editing) {
            dispatch(editCurrentPost(postData, postToEdit._id));
        }else {
            dispatch(createNewPost(postData));
        }
        clear();
    }
  return (
    <div className='card shadow-lg p-3 mb-5 overflow-hidden'>
       <h2 className="card-title">{editing ? "Edit Post" : "Create a new Post"}</h2>
        <form onSubmit={handleSubmit}>
            <p className='text-danger'>{error}</p>
            <p>{loading ? "loading...": null}</p>
            <div className="mb-3">
                <label className="form-label fw-bold">Post Title:</label>
                <input type="text" maxLength="40" className="form-control" value={postData.title} placeholder="what's on your mind?"  onChange={(e) => setPostData({...postData, title: e.target.value})} required/>
            </div>
            <div className="mb-3">
                <label className="form-label fw-bold">Post body:</label>
                <textarea maxLength="100" className="form-control" value={postData.discription} rows="4" placeholder='tell us more details' onChange={(e) => setPostData({...postData, discription: e.target.value})} style={{"resize": "none"}} required/>
            </div>         
            <div id="upload-file-container mb-3">
                <label className="form-label fw-bold d-block">Add a picture:</label>
                <Filebase type="file" multiple={false} onDone={(files) => {
                setPostData({...postData, picture: files.base64});
                }}></Filebase>
                <div id="passwordHelpBlock" className="form-text">dont add anything for a random picture!</div>
            </div>
            <div className='d-flex align-items-center justify-content-between mt-3'>
            <div className="btn-group" role="group">
                <button type="submit" className="btn btn-primary fw-bold">Submit <FontAwesomeIcon icon={faPaperPlane} size='sm' /></button>
                <button type="button" className="btn btn-danger fw-bold" onClick={clear}>Clear <FontAwesomeIcon icon={faTrash} size='sm' /></button>
            </div>
            {loading ? (<div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>): (<div></div>)}
            </div>
        </form> 
    </div>
  )
}

export default Form