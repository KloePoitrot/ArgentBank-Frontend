import "./userInfo.css"

function UserInfo(props){
    return(
        <div className="header">
            <h1>Welcome back<br />{props.userName}</h1>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}
export default UserInfo