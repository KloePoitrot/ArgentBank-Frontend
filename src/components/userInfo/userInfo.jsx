function UserInfo(props){
    return(
        <div class="header">
            <h1>Welcome back<br />{props.userName}</h1>
            <button class="edit-button">Edit Name</button>
        </div>
    )
}
export default UserInfo