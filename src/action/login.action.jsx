import axios from "axios"

export const LOG_IN = "LOG_IN"
export const LOG_IN_FAILED = "LOG_IN_FAILED"
export const LOG_OUT = "LOG_IN_FAILED"

export function logginIn(data) {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data)
        .then((res) => {
            dispatch({ type: LOG_IN, payload: res.data })
        })
        .catch((err) => {dispatch({ type: LOG_IN_FAILED })})
    }
}
export function loggingOut() {
    return (dispatch) => dispatch({ type: LOG_OUT })
}
