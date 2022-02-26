import {SAVING_SUCCESS, SAVING_ERROR, SAVING_NEW_POST} from "../actions/postActions";
import {EDITING_POST} from "../actions/myPostesActions";
const initialState = {
    loading: false,
    errorMSG: "",
    editing: false,
    post: {}
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVING_SUCCESS:
            return {
                ...state,
                loading: false,
                errorMSG: ""           
             };
        case SAVING_ERROR:
            return {...state,
                loading: false,
                errorMSG: action.payload.msg
            };
        case SAVING_NEW_POST:
            return {
                ...state, 
                loading: true
            };
        case EDITING_POST: 
            return {
                loading: false,
                errorMSG: "",
                editing: true,
                post: action.payload 
            }
        case "STOP_EDITING":
            return {
                ...state,
                editing: false,
                post: {}
            }
        default:
            return state;
    }
}




export default formReducer;