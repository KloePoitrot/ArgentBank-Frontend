import { LOG_IN, LOG_IN_FAILED, LOG_OUT } from "../action/login.action"

export const InitialState = { loggedIn: false, token: null }

function logReducer(state = InitialState, action) {
    switch (action.type) {
        case LOG_IN:
            state = { loggedIn: true, token: action.payload.body.token }
            return state
        case LOG_IN_FAILED:
            state = { loggedIn: "error", token: null }
            return state
        case LOG_OUT:
            state = InitialState
            return state
        default:
            return state
    }
}

export default logReducer