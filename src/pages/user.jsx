import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import UserInfo from "../components/userInfo/userInfo"

function UserPage(){
    return (
        <>
            <Header/>
            <main className="main bg-dark">
                <UserInfo userName="Tony Jarvis!"/>
                <h2 class="sr-only">Accounts</h2>
                <section class="account">
                    <div class="account-content-wrapper">
                    <h3 class="account-title">Argent Bank Checking (x8349)</h3>
                    <p class="account-amount">$2,082.79</p>
                    <p class="account-amount-description">Available Balance</p>
                    </div>
                    <div class="account-content-wrapper cta">
                    <button class="transaction-button">View transactions</button>
                    </div>
                </section>
                <section class="account">
                    <div class="account-content-wrapper">
                        <h3 class="account-title">Argent Bank Savings (x6712)</h3>
                        <p class="account-amount">$10,928.42</p>
                        <p class="account-amount-description">Available Balance</p>
                    </div>
                    <div class="account-content-wrapper cta">
                        <button class="transaction-button">View transactions</button>
                    </div>
                </section>
                <section class="account">
                    <div class="account-content-wrapper">
                        <h3 class="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p class="account-amount">$184.30</p>
                        <p class="account-amount-description">Current Balance</p>
                    </div>
                    <div class="account-content-wrapper cta">
                        <button class="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default UserPage