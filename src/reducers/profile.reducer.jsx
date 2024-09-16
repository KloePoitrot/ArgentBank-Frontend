import { GET_PROFILE, NEW_USER } from "../action/profile.action"
import { LOG_OUT } from "../action/login.action"


export const InitialState = { id: "Please log in" }

function profileReducer(state = InitialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            state = action.payload.body
            return state
        case NEW_USER:
            state = action.payload.body
            return state
        case LOG_OUT:
            state = InitialState
            return state
        default:
            return state
    }
}

export default profileReducer