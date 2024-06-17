import React from 'react';
import { senddata } from './store/usecontext';
import './Home.css';

const Home = () => {
  let { userfulldetail } = senddata();
  
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Good Morning';
    if (hours < 18) return 'Good Afternoon';
    return 'Good Evening';
  }

  return (
    <div className="container">
      <h1>Welcome to Our Platform</h1>
      <p className="greeting">{getGreeting()}, {userfulldetail && userfulldetail.token && userfulldetail.token.name}</p>
       <p>We are excited to have you here. Explore and enjoy our services!</p>
      <button className="cta-button">Get Started</button>
    </div>
  );
}

export default Home;
