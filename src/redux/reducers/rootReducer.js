import { combineReducers } from "redux"
import authReducer from "./authReducer"
import formReducer from "./formReducer"
import myPostesReducer from "./myPostesReducer";
import personalInfoReducer from "./personalInformationReducer";

const rootReducer = combineReducers({
    user: authReducer,
    form: formReducer,
    mypostes: myPostesReducer,
    personalInfo: personalInfoReducer
})

export default rootReducer