import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Veg from './Veg'
import NonVeg from './NonVeg'
import Cart from './Cart'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import PurchaseHistory from './PurchaseHistory'
import './App.css';
import { useSelector } from 'react-redux'
import Task from './Task'
import ProductsSave from './productsSave'
import GoogleLoginComponent from './GoogleLoginComponent'
import { GoogleOAuthProvider } from '@react-oauth/google'
import NotFound from './NotFound'


function App() {
  
const cart = useSelector((state)=> state.cart)
const cartItems= cart.reduce((sum,item) => sum + item.quantity,0)

  return (
    <>
    <GoogleOAuthProvider clientId='647467758450-k6bkllll1t95vc8olp691h9fha3qjh42.apps.googleusercontent.com' >
    <GoogleLoginComponent/>
    </GoogleOAuthProvider>
    
    <BrowserRouter>
    
    <nav>
    <Link to='/home'>Home</Link>
    <Link to='/veg'>Veg</Link>
    <Link to='/nonveg'>NonVeg</Link>
    <Link to='/cart'>Cart({cartItems})</Link>
    <Link to='/aboutus'>About Us</Link>
    <Link to='/contactus'>Contact Us</Link>
    <Link to='/purchasehistory'>Purchase History</Link>
   
    {/* <Link to='/productsSave'>Add product</Link> */}
  </nav>
  
    <Routes>

    <Route path='/home' element={<Home />} />
    <Route path='/veg' element={<Veg />} />
    <Route path='/nonveg' element={<NonVeg />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/aboutus' element={<AboutUs />} />
    <Route path='/contactus' element={<ContactUs />} />
    <Route path='/purchasehistory' element={<PurchaseHistory />} />
    <Route path='*' element={<NotFound />} />

    {/* <Route path='/productsSave' element={<ProductsSave />} /> */}


    </Routes>
    
    
    
    </BrowserRouter>
    

    {/* <Task /> */}
    
    
    
    </>
    
  )
}

export default App
