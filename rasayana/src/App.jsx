import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Philosophy from './pages/Philosophy.jsx'
import Menu from './pages/Menu.jsx'
import Chef from './pages/Chef.jsx'
import Reservations from './pages/Reservations.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/reservations" element={<Reservations />} />
      </Routes>
      <Footer />
    </>
  )
}