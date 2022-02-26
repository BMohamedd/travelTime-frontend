import React, {useState, useEffect} from 'react'
import {useDispatch} from "react-redux";
import {createAnAccount} from "../../redux/actionCreators/authActionCreators";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"


function RegisterForm() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isLoadingState, setIsloading] = useState(false);
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.user.isLoading);
    const errorMsg = useSelector((state) => state.user.errorMsg);
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    

    useEffect(() => {
      setIsloading(isLoading);
    }, [isLoading])
  
    useEffect(() => {
      setError(errorMsg);
    }, [errorMsg])

    useEffect(() => {
        if(isAuthenticated) {
            navigate("../..")
        }
    }, [isAuthenticated, navigate])
  
    const handleSubmit = (e) => {
      e.preventDefault();
        dispatch(createAnAccount({username, password, email}));
    } 
  return (
    <div className='text-dark text-center' style={{"backGround": "#ddd"}}> 
      <div className='container'>
        <div className='d-flex vh-100 align-items-center justify-content-center'>
          <div>
            <h1 className='text-primary font-bold'>TravelTime</h1>
            <div className='card shadow-lg'>
              <div className="card-body tect">
                <p className='text-danger'>{error}</p>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder='Enter your e-mail' onChange={(e) => setEmail(e.target.value)} required={true} />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder='Enter your username' onChange={(e) => setUsername(e.target.value)} required={true} />
                </div>
                <div className="mb-3">
                  <input type="password" className="form-control" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} required={true} />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={isLoadingState}>Create an account</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm