import React from 'react'
import { UseCutOff } from './Context/StateContext'
import CardProfile from './components/CardProfile'
import "./App.css"
import { Route, Routes, useNavigate } from 'react-router-dom'
import All from './components/All'
import Ece from './components/Ece'
import Mech from './components/Mech'
import Csc from './components/Csc'
import Eee from './components/Eee'
import Civil from './components/Civil'



const App = () => {
 
  

  return (
  <div> 
<Routes>
          <Route path='/Ece' element={<Ece />}/>
          <Route path="/Mech" element={<Mech/>} />
          <Route path="/Csc" element={<Csc />} />
          <Route path="/Eee" element={<Eee />} />
          <Route path="/Civil" element={<Civil />} />
          <Route path="/All" element={<All />} />
          <Route path="/" element={<CardProfile />}/>
        </Routes>
 </div>
  )
}

export default App
