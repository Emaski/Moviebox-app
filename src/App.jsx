import React from 'react'
import './index.css'
import Home from './pages/Home'
import Movies from './pages/Movies';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'
import Tvshows from './pages/Tvshows';
import Trailer from './pages/Trailer';


function App() {

  return (
    <>
    <Router>
      <div className='flex'>
      <div className="hidden md:block">
    <Sidebar />
      </div>
        <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<Movies/>} />
          <Route path="/tvshows" element={<Tvshows/>} />
          <Route path="/trailer" element={<Trailer />} />
        </Routes>
      </div>
    </Router>
    
    
    </>
  )
}

export default App
