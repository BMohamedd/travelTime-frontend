 
    const initialState = {
        postes: [],
        errorMSG: "",
        successMSG: ""
    };
    
    const personalInfoReducer = (state = initialState, action) => {
        switch (action.type) {
            case "PERSONAL_SAVING_SUCCESS": 
                return {
                    ...state,
                    errorMSG: "",
                    successMSG: action.payload,
                }
            case "PERSONAL_SAVING_ERROR": 
                return {
                    ...state,
                    errorMSG: action.payload,
                    successMSG: "",
                }
            case "INFO_REQUEST_SUCCESS":
                return {
                    postes: action.payload,
                    errorMSG: "",
                    successMSG: ""
                }
            case "INFO_REQUEST_ERROR":
                return {
                    postes: [],
                    errorMSG: action.payload,
                    successMSG: ""
                }
            default:
                return state;
        }
    }
    
    
    
    
    export default personalInfoReducer;