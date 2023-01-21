import {combineReducers} from "redux"
import mytaskReducer from "./mytaskReducer";
import authReducer from "./authReducer";



const rootReducer =  combineReducers({
    mytasks :  mytaskReducer,
    auth: authReducer
})

export default rootReducer