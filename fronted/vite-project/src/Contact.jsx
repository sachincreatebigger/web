import React, { useState } from 'react'
import axios from 'axios'
import './contact.css';
const Contact = () => {
 
    let[data,setdata]=useState({
      name:'',
      email:'',
      
      message:''
      
      
        })
        let name
        let value
      function handleform(e){
      name=e.target.name
      value=e.target.value
      setdata({...data,[name]:value})
      
      
      }
      function abc(){
        //http://localhost:3000/register
      let y=axios.post("http://localhost:3000/contact",data)
      console.log(data)
      
      }
        return (
          <div className='abc'>
            <h1>contact Form</h1>
          
            <form method="get" onSubmit={(e)=>(e.preventDefault())}>
      <input type="text" name='name' placeholder='name' onChange={handleform} value={data.name}/>
      <input type='email' name='email' placeholder='email' onChange={handleform} value={data.email}/>
      <input type="text" name='message' placeholder='message' onChange={handleform} value={data.message}/>
       <button onClick={abc}>submit</button>
      
      
      
            </form>
          </div>
  )
}

export default Contact
