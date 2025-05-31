import { useState } from 'react'

import './App.css'
import Navbar from "./components/pages/Navbar"
import Header from './components/pages/Header'
import Homepage from './components/pages/Homepage'
import Cards from './components/pages/Cards'
import AboutUs from './components/pages/AboutUs'
import ProhibitHabit from './components/pages/ProhibitHabit'
import Testimonial from './components/pages/Testimonial'
import Tests from './components/pages/Tests'
import ComingApp from './components/pages/ComingApp'
import BookYourSlot from './components/pages/BookYourSlot'
import Footer from './components/pages/Footer'
import PopularTestsSlider from './components/pages/PopularTestSlider'

function App() {
  return (
    <div className='bg-white '>

      <Navbar />
      <Header />
      <Homepage />
      <Cards />
      <AboutUs />
      <PopularTestsSlider upperlimit={3} lowerlimit={1} heading={"Our Tests"} text={"Most Popular Tests"} />
      <ProhibitHabit />
      <PopularTestsSlider upperlimit={6} lowerlimit={4} heading={"Our Tests"} text={"Browse Test By Risks"} />
      <Testimonial />
      <Tests />
      <ComingApp />
      <BookYourSlot />
      <Footer />
    </div>
  )
}

export default App
