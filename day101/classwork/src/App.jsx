import React from 'react'
import { Route, Routes } from 'react-router'
import About from './pages/about'
import Home from './pages/home'

export default function App() {
  return (

    <div>
  
    <Routes>
    <Route path="/">
    
      <Route path="" element={<Home />} />
      <Route path="create" element={<HomeCreate />} />
    <Route/>

      <Route path="/About" element={<About />} />
      <Route path="" element={<Home />} />
      <Route path="create" element={<HomeCreate />} />
    </Route>

    </Routes>
  
    </div>

  )
}
