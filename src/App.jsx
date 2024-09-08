import { useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import ImgBanner from './components/imgBanner/imgBanner'

import "./css/main.css"
import FeaturedCard from './components/featuredCard/featuredCard'

function App() {

  return (
    <>
      <Header/>
      <main>
        <ImgBanner>
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </ImgBanner>

        <section class="features">
          <h2 class="sr-only">Features</h2>
          <FeaturedCard
            title="You are our #1 priority"
            icon="./src/img/icon-chat.png"
            content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
          />
          <FeaturedCard
            title="More savings means higher rates"
            icon="./src/img/icon-money.png"
            content="The more you save with us, the higher your interest rate will be!"
          /><FeaturedCard
          title="Security you can trust"
          icon="./src/img/icon-security.png"
          content="We use top of the line encryption to make sure your data and money
            is always safe."
        />
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App
