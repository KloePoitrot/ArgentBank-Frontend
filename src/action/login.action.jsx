import axios from "axios"

export const LOG_IN = "LOG_IN"

export function logginIn(data) {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data)
        .then((res) => {dispatch({ type: LOG_IN, payload: res.data })})
        .catch((err) => {console.log(err)})
    }
}