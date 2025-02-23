import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/functionalcomponents/NavBar';
import Home from './components/functionalcomponents/Home';
import About from './components/functionalcomponents/About';
import Skills from './components/functionalcomponents/Skills';
import Projects from './components/functionalcomponents/Projects';
import Education from './components/functionalcomponents/Education';
import Contact from './components/functionalcomponents/Contact';


import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <BrowserRouter>
    <NavBar/ >
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/education" element={<Education />} />
    <Route path="/contact" element={<Contact />} />

    </Routes>
    </BrowserRouter>
   </main>
  )
}

export default App