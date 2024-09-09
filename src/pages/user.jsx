import AccountInfo from "../components/accountInfo/accountInfo"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import UserInfo from "../components/userInfo/userInfo"

function UserPage(){
    return (
        <>
            <Header/>
            <main className="main bg-dark">
                <UserInfo userName="Tony Jarvis!"/>
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
}

export default UserPage