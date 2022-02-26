import {SAVING_NEW_POST, SAVING_SUCCESS, SAVING_ERROR} from "../actions/postActions";
import {ADD_TO_POST_LIST, UPDATE_POST_LIST_NEW_POST} from "../actions/myPostesActions";
import * as api from "../api/index";

export const createNewPost =  (postData) => async (dispatch, getState) => {
    dispatch({type: SAVING_NEW_POST});
    const config = {
        headers: {
            "x-auth-token": getState().user.token
        }
    }
    try {
        const {data} = await api.CreatePost(postData, config);
        dispatch({type: SAVING_SUCCESS});
        dispatch({type: UPDATE_POST_LIST_NEW_POST , payload: data })
    } catch (error) {
        dispatch({type: SAVING_ERROR, payload:{msg: error.response.data}});
    }
}
export const editCurrentPost =  (postData, _id) => async (dispatch, getState) => {
    dispatch({type: SAVING_NEW_POST});

    const dataToRequest = {...postData, _id};

    const config = {
        headers: {
            "x-auth-token": getState().user.token
        }
    }
    try {
        const {data} = await api.editCurrentPost(dataToRequest, config);
        dispatch({type: SAVING_SUCCESS});
        dispatch({type: ADD_TO_POST_LIST, payload: data.postToEdit })
    } catch (error) {
        console.log(error);
    }
}
