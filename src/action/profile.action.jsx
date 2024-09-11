import axios from "axios"

export const GET_PROFILE = "GET_PROFILE"

export function getProfile(data) {
    return (dispatch) => {
        return axios.get("http://localhost:3001/api/v1/user/profile", {headers: {"Authorization": `Bearer ${data}`}})
        .then((res) => {
            dispatch({ type: GET_PROFILE, payload: res.data })
        })
        .catch((err) => console.error(err))
    }
}