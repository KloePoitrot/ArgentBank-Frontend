import { combineReducers } from "redux";
import logReducer from "./log.reducer";
import profileReducer from "./profile.reducer";

export default combineReducers({
    logReducer,
    profileReducer,
})