import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Adminlayout.css';

const Adminlayout = () => {
  return (
    <div className="admin-layout">
      <nav className="admin-sidebar">
        <h1 className="admin-logo">Admin Panel</h1>
        <ul>
          <li><NavLink to="/Adminlayout/user" activeClassName="active-link">Admin User</NavLink></li>
          <li><NavLink to="/Adminlayout/contact" activeClassName="active-link">Admin Contact</NavLink></li>
          <li><NavLink to="/Adminlayout/addservices" activeClassName="active-link">Add Services</NavLink></li>
        </ul>
      </nav>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Adminlayout;
