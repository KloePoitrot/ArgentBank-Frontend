import { Link } from "react-router-dom"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { logginIn } from "../action/login.action"

function Signin(){
    const Login = useRef()
    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        e.preventDefault()

        const postUser = {
            email: Login.current[0].value,
            password: Login.current[1].value,
        }

        dispatch(logginIn(postUser))
    }

    return (
        <>
            <Header/>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
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
                        {/* <Link to="/user" className="sign-in-button">Sign In</Link> */}
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Signin