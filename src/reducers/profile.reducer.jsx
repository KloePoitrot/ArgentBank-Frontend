import { GET_PROFILE } from "../action/profile.action"

export const InitialState = { test: "test" }

function profileReducer(state = InitialState, action) {
    switch (action.type) {
        case GET_PROFILE:
            state = action.payload.body
            return state
        default:
            return state
    }
}

export default profileReducer