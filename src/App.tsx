import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Szolgaltatasok from './components/Szolgaltatasok'
import Arckezelesek from './components/services/Arckezelesek'
import Mikrotus from './components/services/Mikrotus'
import Gyantazas from './components/services/Gyantazas'
import Muszempilla from './components/services/Muszempilla'
import Smink from './components/services/Smink'
import Mukorom from './components/services/Mukorom'
import Lezeres from './components/services/Lezeres'
import Egyeb from './components/services/Egyeb'
import Arak from './components/Arak'
import Galeria from './components/Galeria'
import Kapcsolat from './components/Kapcsolat'

function App() {
  return (
    <div className="app">
      <Navbar />
      
      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/szolgaltatasok" element={<Szolgaltatasok />} />
          <Route path="/szolgaltatasok/arckezelesek" element={<Arckezelesek />} />
          <Route path="/szolgaltatasok/mikrotus" element={<Mikrotus />} />
          <Route path="/szolgaltatasok/gyantazas" element={<Gyantazas />} />
          <Route path="/szolgaltatasok/muszempilla" element={<Muszempilla />} />
          <Route path="/szolgaltatasok/smink" element={<Smink />} />
          <Route path="/szolgaltatasok/mukorom" element={<Mukorom />} />
          <Route path="/szolgaltatasok/lezeres" element={<Lezeres />} />
          <Route path="/szolgaltatasok/egyeb" element={<Egyeb />} />
          <Route path="/arak" element={<Arak />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/kapcsolat" element={<Kapcsolat />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
