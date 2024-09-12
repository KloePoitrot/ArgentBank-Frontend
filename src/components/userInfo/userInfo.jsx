import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { saveNewUser } from "../../action/profile.action"
import "./userInfo.css"

function UserInfo(props){
    const EditUser = useRef()
    const dispatch = useDispatch()
    const token = useSelector((state) => state.logReducer)
    const [ isEditTrue , setEdit ] = useState(false)

    const handleEdit = async (e) => {
        e.preventDefault()
        
        const newUser = {userName: EditUser.current[0].value,}

        dispatch(saveNewUser(token.token, newUser))
        setEdit(false)
    }

    if(isEditTrue){
        return(
            <div className="edituser">
                <h1>Edit user info</h1>
                <form ref={EditUser}>
                    <div className="edituser_Info">
                        <label htmlFor="username">User name</label>
                        <input type="text" id="username" placeholder={props.userName}/>
                    </div>
                    <div className="edituser_Info">
                        <label htmlFor="password">First name</label>
                        <input type="text" id="password" placeholder={props.firstName} disabled/>
                    </div>
                    <div className="edituser_Info">
                        <label htmlFor="password">Last name</label>
                        <input type="text" id="password" placeholder={props.lastName} disabled/>
                    </div>
                    <div className="edituser_buttons">
                        <button className="edituser_save" onClick={(e) => (handleEdit(e))}>Save</button>
                        <button className="edituser_cancel" onClick={() => (setEdit(false))}>cancel</button>
                    </div>
                </form>
            </div>
        )
    } else {
        return(
            <div className="header">
                <h1>Welcome back<br />{props.firstName} {props.lastName}</h1>
                <button className="edit-button" onClick={() => (setEdit(true))}>Edit Name</button>
            </div>
        )
    }
}
export default UserInfo