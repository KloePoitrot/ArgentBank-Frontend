import axios from "axios"

export const GET_PROFILE = "GET_PROFILE"
export const NEW_USER = "NEW_USER"

export function getProfile(data) {
    return (dispatch) => {
        return axios.get("http://localhost:3001/api/v1/user/profile", {headers: {"Authorization": `Bearer ${data}`}})
        .then((res) => {
            dispatch({ type: GET_PROFILE, payload: res.data })
        })
        .catch((err) => console.error(err))
    }
}

export function saveNewUser(token, data) {
    return (dispatch) => {
        return axios.put("http://localhost:3001/api/v1/user/profile", data, {headers: {"Authorization": `Bearer ${token}`}})
        .then((res) => {
            dispatch({ type: NEW_USER, payload: res.data })
        })
        .catch((err) => console.error(err))
    }
}