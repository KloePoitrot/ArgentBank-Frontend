import { useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import ImgBanner from './components/imgBanner/imgBanner'

import "./css/main.css"

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
      </main>
      <Footer/>
    </>
  )
}

export default App
