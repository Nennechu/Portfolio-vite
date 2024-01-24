import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Header/Navbar'
import Home from './Pages/1.home/Home'
import Services from './Pages/2.services/Services'
import Portfolio from './Pages/3,portfolio/Portfolio'
import Contact from './Pages/4.contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
 

  return (
    <div className="flex flex-col h-screen bg-neon5">  
      <Router>
        <Navbar/>
        <main className="flex-grow bg-neon5">
        <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
        </main>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
