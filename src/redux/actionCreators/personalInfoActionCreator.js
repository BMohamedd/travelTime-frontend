import {editPersonalInfo, requestPersonalInfo} from "../api/index";

export const editPersonalInfoActionCreator =  ({country, city, age, school, bio, gender}) => async (dispatch, getState) => {

    const dataToRequest = ["false", country, city, age, school, bio, gender];

    const config = {
        headers: {
            "x-auth-token": getState().user.token
        }
    }

    try {
        const {data} = await editPersonalInfo(dataToRequest, config);
        dispatch({type: "PERSONAL_SAVING_SUCCESS", payload: data});
    } catch (error) {
        console.log(error)
        dispatch({type: "PERSONAL_SAVING_ERROR", payload: "it didn't work please try again soon..."});
    }
}
export const requestPersonalInfoActionCreator =  () => async (dispatch, getState) => {

    const config = {
        headers: {
            "x-auth-token": getState().user.token
        }
    }

    try {
        const {data} = await requestPersonalInfo(config);
        dispatch({type: "INFO_REQUEST_SUCCESS", payload: data});
    } catch (error) {
        dispatch({type: "INFO_REQUEST_ERROR", payload: "Please try to refresh or relog..."});
    }
}