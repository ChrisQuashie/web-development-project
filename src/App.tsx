
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Services from './pages/Services'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes } from 'react-router-dom'


function App() {


  return (
    <Router>
      <div className='bg-black text-white'>
        <Navbar />
        <div>
          <Home />
          <About />
          <Services />
          <Experience />
          <Contact />
        </div>
        <Footer />
      </div>
      <Routes>
      </Routes>
    </Router>
  )
}

export default App
