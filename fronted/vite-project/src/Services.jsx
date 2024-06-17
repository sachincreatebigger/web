import React from 'react';
import { senddata } from './store/usecontext';
import './Services.css'; // Import the CSS file
import axios from 'axios';

const Services = () => {
   let { servicesdata ,findservicesdata} = senddata();
   console.log(servicesdata); // Log servicesdata to check its structure and content
  async function deletfun(id){
console.log(id)
let response=await axios.delete(`http://localhost:3000/services/${id}`)
console.log(response.data)
findservicesdata()
   }
  return (
    <div className="services-container">
      <h1>Services</h1>
      {servicesdata.map((e, index) => (
        <div key={index} className="service-card">
          <div className="service-title">{e.title}</div>
          <div className="service-description">{e.description}</div>
          <div className="service-price">{e.price}</div>
          <button onClick={()=>deletfun(e._id)}>delet</button>
        </div>
      ))}
    </div>
  );
}

export default Services;
