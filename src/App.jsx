import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './HeaderSection/Header'
import FounderDetails from './FounderSection/FounderDetails'
import ServicesDetails from './ServicesSection/ServicesDetails'
import Testimonials from './TestimonialSection/TestimonialsDetails'
import StatesFaqFooter from './FooterSection/FooterDetails'
function App() {

  return (
    <div className='App'>
      <Header />
      <FounderDetails />
      <ServicesDetails />
      <Testimonials />
      <StatesFaqFooter />
    </div>

  )
}

export default App
