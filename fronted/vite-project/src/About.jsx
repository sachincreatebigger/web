import React from 'react'
import { senddata } from './store/usecontext'
import "./About.css"
const About = () => {
  let {userfulldetail}=senddata()
  return (
    <div className='about-container'>
      <img src="a.png" style={{width:"245px",height:"245px"}}/>
      <h6>name:{userfulldetail && userfulldetail.token && userfulldetail.token.name}
  
      </h6>
      <h6>email:{userfulldetail && userfulldetail.token && userfulldetail.token.email}</h6>
  <h6>number:{userfulldetail && userfulldetail.token && userfulldetail.token.number}
  </h6>
    </div>
  )
}

export default About
