import { LOG_IN, LOG_IN_FAILED } from "../action/login.action"

const initialState = { loggedIn: false, token: null }

function logReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            state = { loggedIn: true, token: action.payload.body.token }
            return state
        case LOG_IN_FAILED:
            state = { loggedIn: false, token: false }
            return state
        default:
            return state
    }
}

export default logReducer