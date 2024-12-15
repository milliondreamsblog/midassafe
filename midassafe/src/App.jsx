import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductPage />
      <Footer />
    </>
  )
}

export default App