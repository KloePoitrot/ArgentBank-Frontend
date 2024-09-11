import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logginIn } from "../action/login.action"
import { Navigate } from "react-router-dom"
import { getProfile } from "../action/profile.action"

function Signin(){
    const Login = useRef()
    const dispatch = useDispatch()
    const token = useSelector((state) => state.logReducer)

    const handleLogin = async (e) => {
        e.preventDefault()

        const postUser = {
            email: Login.current[0].value,
            password: Login.current[1].value,
        }

        dispatch(logginIn(postUser))
    }

    
    if(token.loggedIn === true){
        console.log(token.token)
        dispatch(getProfile(token.token))
        return(
            <Navigate to="/user" replace />
        )
    } else {
        return (
            <>
                <Header/>
                <main className="main bg-dark">
                    <section className="sign-in-content">
                        <i className="fa fa-user-circle sign-in-icon"></i>
                        <h1>Sign In</h1>
                        { token.token === false ? <p className="errorMsg">The username or password is invalid</p> : [] }
                        
                        <form ref={Login} onSubmit={e => handleLogin(e)}>
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" />
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <button className="sign-in-button">Sign In</button>
                        </form>
                    </section>
                </main>
                <Footer/>
            </>
        )
    }


    
}

export default Signin