import React from 'react'
import Men from './Men'
import Women from './Women'
import Kids from './Kids'
import HomeAndKitchen from './HomeAndKitchen'
import Ajio from './Ajio'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Cart from './Cart'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <h1>This is Modified Project</h1>
    <BrowserRouter >
    <nav>   
    <Link to='/ajio'>Ajio</Link>
    <Link to='/men'>Men</Link>
    <Link to='/women'>Women</Link>
    <Link to='/kids'>Kids</Link>
    <Link to='/homeandkitchen'>Home&Kitchen</Link>
    <Link to='/contactus'>ContactUs</Link>
    <Link to='/aboutus'>AboutUs</Link>
    <Link to='/cart'>Cart</Link>
    </nav>

    <Routes>
      <Route path='/ajio' element={<Ajio />} />
      <Route path='/men' element={ <Men />} />
      <Route path='/women' element={<Women />} />
      <Route path='/kids' element={ <Kids />} />
      <Route path='/homeandkitchen' element={<HomeAndKitchen />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/aboutus' element={<AboutUs  />} />
      <Route path='/cart' element={<Cart />} />
     


    </Routes>
    
    </BrowserRouter>
    

   
    
    
    

    

    
    
    </>
    
  )
}

export default App
