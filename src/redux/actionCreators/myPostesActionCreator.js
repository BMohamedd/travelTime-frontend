import {getPostes, likePost, deletePostRequest} from "../api/index";
import {LOADING_POSTES, POSTES_LOADED, LOADING_ERROR, EDITING_POST, POSTE_DELETED, POST_LIKED, LIKE_POST_STARTING} from "../actions/myPostesActions";
import {BROWSE_POST_LIKED, BROWSE_LIKE_POST_STARTING} from '../actions/browseActions'

export const requestMyPostes = () => async (dispatch, getState) =>  {
    dispatch({type: LOADING_POSTES});
    const config = {
        headers: {
            "x-auth-token": getState().user.token
        }
    }
    
    try {
        const {data} = await getPostes(config);
        dispatch({type: POSTES_LOADED, payload: data});
    } catch (error) {
        console.log({error})
        dispatch({type: LOADING_ERROR, payload:{msg: error.response.data}});
    }
}

export const deletePost = (id) => async (dispatch, getState) => {
    dispatch({type: POSTE_DELETED, payload: id});

    const config = {
        headers: {
            "x-auth-token": getState().user.token
        }
    }

    try {
        await deletePostRequest(id, config);
        dispatch({ type: "STOP_EDITING" });
    } catch (error) {
        console.log(error);
    }
}

export const likePostAction = (id, userId) => async (dispatch, getState) => {

    if(userId) {
        dispatch({type: BROWSE_LIKE_POST_STARTING, payload: id});
    }else{
        dispatch({type: LIKE_POST_STARTING, payload: id})
    }
    const config = {
        headers: {
            "x-auth-token": getState().user.token
        }
    }

    try {
        const {data} = await likePost(id,userId, config);
        if(userId) {
            dispatch({type: BROWSE_POST_LIKED, payload: data});
        }else{
            dispatch({type: POST_LIKED, payload: data});
        }
    } catch (error) {
        console.log({error});
    }
    
}

export const editPost = (id) => async(dispatch, getState) => {

    const post = getState().mypostes.postes.filter(element => element._id === id);

    dispatch({ type: EDITING_POST, payload: post[0] });
}