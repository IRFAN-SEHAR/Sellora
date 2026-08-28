import { useState } from 'react'
import Admin_Dash from './Admin_Dash'
import Home from './Home'
import Cart from './Cart'
import Login from './Login'
import Contact from './Contact'
import Products from './Products'
import Profile from './Profile'
import Header from './Header'
import Footer from './Footer'
import './App.css'

function App() {

  return (
    < >
    <Header/>
    {/* <Profile/> */}
      {/* <Admin_Dash/> */}
      <Home/>
       <Products/>
      <Cart/>
      <Login/>
      <Contact/>
     
      
      <Footer/>

    </>
  )
}

export default App
