import { useSelector} from "react-redux"
import AccountInfo from "../components/accountInfo/accountInfo"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import UserInfo from "../components/userInfo/userInfo"
import { Navigate } from "react-router-dom"

function UserPage(){
    const token = useSelector((state) => state.logReducer)
    const user = useSelector((state) => state.profileReducer)

    if(token.loggedIn === true){
        return (
            <>
                <Header/>
                <main className="main bg-dark">
                    <UserInfo firstName={user.firstName} lastName={user.lastName}/>
                    <h2 className="sr-only">Accounts</h2>
                    <AccountInfo 
                        title="Argent Bank Checking (x8349)"
                        amount="$2,082.79"
                        amountDesc="Available Balance"
                    />
                    <AccountInfo 
                        title="Argent Bank Savings (x6712)"
                        amount="$10,928.42"
                        amountDesc="Available Balance"
                    />
                    <AccountInfo 
                        title="Argent Bank Credit Card (x8349)"
                        amount="$184.30"
                        amountDesc="Current Balance"
                    />
                </main>
                <Footer/>
            </>
        )
        
    } else {
        return(
            <Navigate to="/signin" replace />
        )
    }
}

export default UserPage