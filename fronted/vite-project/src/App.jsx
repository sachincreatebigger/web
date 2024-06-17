import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Register from "./Register";
import Services from "./Services";
import Navbar from './Navbar';
import Adminlayout from './layouts/Adminlayout';
import Admincontact from './Admincontact';
import Adminuser from './Adminuser';
import Adminaddservices from './Adminaddservices';
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/Services' element={<Services/>}/>
<Route path='/Logout' element={<Logout/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/Register' element={<Register/>}/>
<Route path='/adminlayout' element={<Adminlayout/>}>
<Route path='user' element={<Adminuser/>}/>
<Route path='contact' element={<Admincontact/>}/>
<Route path='addservices' element={<Adminaddservices/>}/>
</Route>


</Routes>


</BrowserRouter>
    </div>
  )
}

export default App
