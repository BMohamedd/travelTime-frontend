import {LOADING_ERROR, POSTES_LOADED, LOADING_POSTES, ADD_TO_POST_LIST
, UPDATE_POST_LIST_NEW_POST, POSTE_DELETED, LIKE_POST_STARTING,
POST_LIKED} from "../actions/myPostesActions";

const initialState = {
    loading: false,
    postes: [],
    errorMSG: "",
    likingId: "",
};

const myPostesReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_POST_LIST_NEW_POST: 
            return {
                loading: false,
                errorMSG: "",
                postes: [action.payload, ...state.postes]
            }
        case ADD_TO_POST_LIST: 
            return {
                ...state,
                postes: [ action.payload, ...state.postes.filter(val => val._id !== action.payload._id)],
            }
        case POSTES_LOADED:
            return {
                ...state,
                postes: action.payload,
                loading: false,
                errorMSG: ""           
             };
        case LOADING_ERROR:
            return {...state,
                loading: false,
                errorMSG: action.payload.msg
            };
        case LOADING_POSTES:
            return {
                ...state, 
                loading: true
            };
        case POSTE_DELETED: 
            return {
                ...state,
                loading: false,
                errorMSG: "",
                postes: [...state.postes.filter(val => val._id !== action.payload)]
            }
        case LIKE_POST_STARTING:
            return {
                ...state,
                likingId: action.payload
            }
        case POST_LIKED:
            return {
                ...state,
                postes: state.postes.map(post => {
                    if(post._id === state.likingId) {
                        return {...post, likeCounter: action.payload};
                    }else return post;
                }),
                likingId: ""
            }
        default:
            return state;
    }
}




export default myPostesReducer;