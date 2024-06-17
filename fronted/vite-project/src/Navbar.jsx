import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';  // Import the CSS file
import { senddata } from './store/usecontext';
function Navbar() {
    let { userlogginornot} = senddata()
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    console.log(userlogginornot)
    return (
        <>
            <div className="navbar">
                <div className='n'>
            <div className="amburger" >
                    Sachin
                </div>
                <div className="hamburger" onClick={toggleNavbar}>
                    ☰
                </div>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/Services'>Services</Link></li>
                    { userlogginornot?
                    <li><Link to='/Logout'>Logout</Link></li>
                    :
                    <>
                    <li><Link to='/Login'>Login</Link></li>
                    <li><Link to='/Register'>Register</Link></li>
                    </> }
                   
                </ul>
            </div>
        </>
    );
}

export default Navbar;
