import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import "./header.css"
import { loggingOut } from "../../action/login.action"

function Header(){
    const token = useSelector((state) => state.logReducer)
    const user = useSelector((state) => state.profileReducer)
    const dispatch = useDispatch()

    const handleLogout = async (e) => {
        e.preventDefault()
        dispatch(loggingOut())
    }

    return(
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src="./src/img/argentBankLogo.webp"
                    alt="Argent Bank Logo"
                />
            <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
            {token.token ? (
                <>
                    <NavLink className="main-nav-item" to="/user">
                        <i className="fa fa-user-circle"></i>
                        {user.userName}
                    </NavLink>
                    <NavLink className="main-nav-item" onClick={(e) => handleLogout(e)}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </NavLink>
                </>
            ) : (
                <NavLink className="main-nav-item" to="/signin">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </NavLink>
            )}
            </div>
        </nav>
    )
}

export default Header

