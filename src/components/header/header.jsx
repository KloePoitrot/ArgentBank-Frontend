import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import "./header.css"

function Header(){
    const token = useSelector((state) => state.logReducer)
    const user = useSelector((state) => state.profileReducer)

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
                        {user.firstName}
                    </NavLink>
                    <NavLink className="main-nav-item" to="/signin">
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

