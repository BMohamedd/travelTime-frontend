import {LOADING_BROWSE_POSTES, MORE_POSTES_LOADED, BROWSE_POST_LIKED,  BROWSE_POSTES_LOADED, BROWSE_POSTES_LOADING_ERROR, BROWSE_LIKE_POST_STARTING} from "../actions/browseActions";
    
    const initialState = {
        loading: false,
        postes: [],
        errorMSG: "",
        likingId: "",
    };
    
    const BrowseReducer = (state = initialState, action) => {
        switch (action.type) {
            case LOADING_BROWSE_POSTES: 
                return {
                    ...state,
                    loading: true,
                }
            case MORE_POSTES_LOADED:
                return {
                    loading: false,
                    errorMSG: "",
                    postes: [...state.postes, ...action.payload]
                }
                case BROWSE_POSTES_LOADED:
               return {
                   loading: false,
                   errorMSG: "",
                   postes: [...state.postes, ...action.payload]
               }
            case BROWSE_POSTES_LOADING_ERROR:
                return {
                    loading: false,
                    errorMSG: action.payload,
                    postes: []     
                 };
            case BROWSE_POST_LIKED:
                return {
                    ...state,
                    postes: state.postes.map(post => {
                        if(post.posts._id === state.likingId) {
                            let postToReturn = post;
                            postToReturn.posts.likeCounter = action.payload;
                            return postToReturn;
                            
                        }else return post;
                    }),
                    likingId: ""
                }
            case BROWSE_LIKE_POST_STARTING: 
                return {
                    ...state,
                    likingId: action.payload
                }
            case "CLEAN_POSTES":
                return {
                    loading: false,
                    postes: [],
                    errorMSG: "",
                    likingId: "",
                }
            default:
                return state;
        }
    }
    
    
    
    
    export default BrowseReducer;