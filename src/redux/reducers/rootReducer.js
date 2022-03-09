import { combineReducers } from "redux"
import authReducer from "./authReducer"
import formReducer from "./formReducer"
import myPostesReducer from "./myPostesReducer";
import personalInfoReducer from "./personalInformationReducer";
import BrowseReducer from "./BrowseReducer";

const rootReducer = combineReducers({
    user: authReducer,
    form: formReducer,
    mypostes: myPostesReducer,
    personalInfo: personalInfoReducer,
    browse: BrowseReducer
})

export default rootReducer