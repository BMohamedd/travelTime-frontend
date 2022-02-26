import {USER_LOADING,
    USER_LOADED,
    AUTH_ERR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL} from "../actions/authAction";
    
    const initialState = {
        token: localStorage.getItem("token") || "",
        isAuthenticated: null,
        errorMsg: '',
        isLoading: false,
        user: ""
    };
    
    export default function authReducer(state = initialState, action) {
        switch(action.type) {
            case USER_LOADING: 
                return {
                    ...state,
                    isLoading: true
                };
            case USER_LOADED:
                return {
                    ...state,
                    isAuthenticated: true,
                    isLoading: false,
                    user: action.payload
                };
            case REGISTER_SUCCESS:
            case LOGIN_SUCCESS:
                localStorage.setItem("token", action.payload.jwt)
                return {
                    ...state,
                    token: action.payload.jwt,
                    isLoading: false,
                    isAuthenticated: true,
                    user: action.payload.user
                };
            case LOGIN_FAIL:
            case REGISTER_FAIL:
            case AUTH_ERR:
                localStorage.removeItem("token");
                return {
                    token: null,
                    isLoading: false,
                    errorMsg: action.payload.errorMsg,
                    isAuthenticated: false,
                    user: null
                };
            case LOGOUT_SUCCESS:
                localStorage.removeItem("token")
                return {
                    token: null,
                    isLoading: false,
                    isAuthenticated: false,
                    user: null
                };
            case "CLEAR_ERROR_MSG":
                return {
                    ...state,
                    errorMsg: ''
                }
            default: return state;
        };
    }