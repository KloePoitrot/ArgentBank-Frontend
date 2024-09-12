import { GET_PROFILE, NEW_USER } from "../action/profile.action"

export const InitialState = { id: "Please log in" }

function profileReducer(state = InitialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            state = action.payload.body
            return state
        case NEW_USER:
            state = action.payload.body
            return state
        default:
            return state
    }
}

export default profileReducer