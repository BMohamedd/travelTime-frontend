import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {editPersonalInfoActionCreator as editinfo}  from "../../../../redux/actionCreators/personalInfoActionCreator"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function Modal() {
    const dispatch = useDispatch();
    const error = useSelector(state => state.personalInfo.errorMSG)
    const success = useSelector(state => state.personalInfo.successMSG)
    const info = useSelector(state => state.personalInfo.postes)

    const [content, setContent] = useState({
        country: "", city: "", age: "", school:"", bio: "", gender : "male" 
    });

    useEffect(() => {
        if(info[0] === "false"){
            setContent({
                country: info[1], city: info[2], age: info[3], school:info[4], bio: info[5], gender : info[6]
            })
        }
    }, [info])
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editinfo(content));
    }

  return (
      <div>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
    <FontAwesomeIcon icon={faPen} size='1x' /> Edit 
    </button>
  
    {/* Modal */}
        <div className="modal fade text-dark" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Personal information</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form className='container' onSubmit={handleSubmit}>
                    <p className='text-danger'>{error}</p>
                    <p className='text-success'>{success}</p>
                    <div className="row">    
                        <div className="col-md-6">
                            <label className="form-label">Country:</label>
                            <input value={content.country} type="text" className="form-control" maxLength="15" placeholder="your country" onChange={e => setContent({...content, country: e.target.value})} required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">City:</label>
                            <input value={content.city} type="text" maxLength="15" className="form-control" placeholder="your city" onChange={e => setContent({...content, city: e.target.value})} required />
                        </div>
                    </div>
                    <div className="row">    
                        <div className="col col-md-6">
                            <label className="form-label ">age</label>
                            <input value={content.age} type="number" min="10" max="99" maxLength="2" className="form-control" placeholder="your age" onChange={e => setContent({...content, age: e.target.value})} required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">School:</label>
                            <input value={content.school} type="text" maxLength="22" className="form-control" placeholder="your school" onChange={e => setContent({...content, school: e.target.value})} required />
                        </div>
                    </div>
                    <div>
                        <label className="form-label" >Gender:</label>
                        <select className="form-select" onChange={(e) => setContent({...content, gender: e.target.value})} required>
                            <option>select a gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select> 
                    </div>
                    <div>
                        <label className="form-label">bio:</label>
                        <textarea value={content.bio} type="text" maxLength="60" className="form-control" rows="3" placeholder="describe yourself in 60 characters!" style={{"resize": "none"}} onChange={e => setContent({...content, bio: e.target.value})} required/>
                    </div>
                    <hr />
                    <div className='float-end'>
                        <button type="button" className="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Save changes</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
</div>
    )
}

export default Modal