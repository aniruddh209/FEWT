import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Layout from './Componantes/Layout'
import Home from './Componantes/Home'
import Aboutus from './Componantes/Aboutus'
import Contactus from './Componantes/Contactus'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/Home' element={<Home />} />
          <Route path='/Aboutus' element={<Aboutus />} />
          <Route path='/Contactus' element={<Contactus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
