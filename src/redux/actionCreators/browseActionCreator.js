import {getBrowsePostes, getMorePostes} from "../api/index";
import {LOADING_BROWSE_POSTES, MORE_POSTES_LOADED, BROWSE_POSTES_LOADED, BROWSE_POSTES_LOADING_ERROR} from "../actions/browseActions";

export const requestBrowsePostes = () => async (dispatch, getState) =>  {
        dispatch({type: LOADING_BROWSE_POSTES});

        const config = {
            headers: {
                "x-auth-token": getState().user.token
            }
        }

        try {
            const {data} = await getBrowsePostes(config);
            dispatch({type: BROWSE_POSTES_LOADED, payload: data});
        } catch (error) {
            dispatch({type: BROWSE_POSTES_LOADING_ERROR, payload:error.response.data});
        }
}



export const requestMoreBrowsePostes = () => async (dispatch, getState) =>  {
    const repeatedValues = []

    getState().browse.postes.forEach(val => {
        return repeatedValues.push(val.posts._id)    
    })

    const config = {
        headers: {
            "x-auth-token": getState().user.token
        }
    }

    try {
        const {data} = await getMorePostes(config, repeatedValues);
                dispatch({type: MORE_POSTES_LOADED, payload: data});

    } catch (error) {
        dispatch({type: BROWSE_POSTES_LOADING_ERROR, payload:error.response.data});
    }
}
