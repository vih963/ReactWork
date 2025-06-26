import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { Section } from './components/Section'
import { Footer } from './components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Section />
      <Footer />
    </>
  )
}

export default App
