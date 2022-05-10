import React from 'react'
import Banner from './components/Banner/Banner'
import Designers from './components/Designers/Designers'
import Footer from './components/Footer/Footer'
import Header from './components/NavBar/Header'
import NFTs from './components/NFTs/NFTs'
import Work from './components/Work/Work'

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <NFTs />
      <Designers />
      <Work />
      <Footer />
    </div>
  )
}

export default App