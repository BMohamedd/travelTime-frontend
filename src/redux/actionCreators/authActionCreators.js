import * as api from "../api/index"
import {USER_LOADING, LOGIN_SUCCESS,
    LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/authAction";

export const loginRequest =  (userdata) => async (dispatch) => {
    dispatch({type: USER_LOADING})
    try {
       const {data} = await api.login(userdata); 
       dispatch({type: LOGIN_SUCCESS, payload: data});
    } catch ({response}) {
       dispatch({type: LOGIN_FAIL, payload: {
           errorMsg: response.data 
       }})
    };
}
export const CheckToken =  (token) => async (dispatch) => {
    dispatch({type: USER_LOADING});
    const config = {
        headers: {
            "x-auth-token": token
        }
    }
    try {
       const {data} = await api.CheckTokenRequest(config); 
       dispatch({type: LOGIN_SUCCESS, payload: {user: data, jwt: token}});
    } catch (err) {
        dispatch({type: LOGIN_FAIL, payload: {
            errorMsg: ""
        }});
    };
}

export const createAnAccount =  (userdata) => async (dispatch) => {
    dispatch({type: USER_LOADING})
    try {
       const {data} = await api.register(userdata); 
       dispatch({type: REGISTER_SUCCESS, payload: data});
    } catch ({response}) {
       dispatch({type: REGISTER_FAIL, payload: {
           errorMsg: response.data 
       }})
    };
}
