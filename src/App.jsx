import React from 'react'
import './index.css'

import Header from './components/Header.jsx'
import Jumbotron from './components/Jumbotron.jsx'
import Main from './components/Main.jsx'
import Buy from './components/Buy.jsx'
import Footer from './components/Footer.jsx'
import Socials from './components/Socials.jsx'
import BtnCurrentSeries from './components/Btn-current-series.jsx'

function App() {


  return (
    <>
      <Header />
      <Jumbotron />
      <BtnCurrentSeries />
      <Main />
      <Buy />
      <Footer />
      <Socials />
    </>
  )
}

export default App
