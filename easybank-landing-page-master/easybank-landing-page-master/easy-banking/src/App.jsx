import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Latest from './components/Latest'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-public-sans text-Grayish-Blue">
     <Navbar />
     <Hero />
     <WhyUs />
     <Latest />
     <Footer />
     </div>
  )
}

export default App
