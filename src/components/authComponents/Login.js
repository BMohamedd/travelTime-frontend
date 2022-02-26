import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux";
import {loginRequest} from "../../redux/actionCreators/authActionCreators";
import {useSelector} from "react-redux";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoadingState, setIsloading] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.user.isLoading);
    const errorMsg = useSelector((state) => state.user.errorMsg);
    const navigate = useNavigate();
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
        dispatch(loginRequest({username, password}));
    } 
  return (
    <div className='text-dark text-center' style={{"backGround": "#ddd"}}> 
      <div className='container'>
        <div className='d-flex vh-100 align-items-center justify-content-center'>
          <div>
            <h1 className='text-primary font-bold'>TravelTime</h1>
            <div className='card shadow-lg px-4'>
              <div className="card-body ">
                <p className='text-danger'>{error}</p>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Username:</label>
                  <input type="text" className="form-control" placeholder='Enter your Username' aria-describedby="emailHelp" onChange={(e) => setUsername(e.target.value)} required={true} />
                </div>
                <div className="mb-3">
                <label>password:</label>
                  <input type="password" className="form-control" placeholder='Enter your password' aria-describedby="emailHelp" onChange={(e) => setPassword(e.target.value)} required={true} />
                </div>
                <button type="submit" className="btn btn-primary w-100" disabled={isLoadingState}>Login</button>
              </form>
              <div id="buttons">
                <a className='mt-5' href='/forgot-password' disabled={isLoadingState}>Forgot password ?</a>
                <hr />
                <button type="button" className="btn btn-success" disabled={isLoadingState} onClick={() => navigate("create-a-new-account")}>Create an account</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login