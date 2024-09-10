import { LOG_IN } from "../action/login.action"

const initialState = { token: null }

function logReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            state = { token: action.payload.body.token }
            return [state]
        default:
            return state
    }
}

export default logReducer