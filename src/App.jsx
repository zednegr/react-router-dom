import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/header/header'
import Home from './pages/home'
import Contact from './pages/contact'
import About from './pages/about'

function App() {

  return (
    <>
      <Header />

      <div className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
