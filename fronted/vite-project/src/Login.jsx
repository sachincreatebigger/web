import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import { senddata } from './store/usecontext'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  let {tokensendfunction} = senddata()
  let[ata,setata]=useState({
email:'',
password:''


  })
  let name
  let value
let nevigate=useNavigate()
  function formhandle(e){
name=e.target.name
value=e.target.value
setata({...ata,[name]:value})
  }
  async function abc() {
    try {
      let response = await axios.post('http://localhost:3000/login', ata);
     ////////
     ///////vo yha hai 
     ///////vo jo instance function sa token ko server per send kiya tha
////////////response.data.token
     ////////
     ///////
     ///////
     ///////
     
      console.log('Response:', response.data.token);
      if (response.status === 200) {  // Check response status
      toast('Login successfully');;
        //console.log(response.json())
          ////////
     ///////token save in local storage
     ///////
     ///////
        //localStorage.setItem("token",response.data.token)

        ////////
      ///////
     ///////another way center data store 
     ///////
     ///////1import { senddata } from './store/usecontext'
     /////// 2 let {tokensendfunction} = senddata()
     ///////3 tokensendfunction(response.data.token)
        tokensendfunction(response.data.token)
        setata({email:'',
        password:''})
      
         nevigate("/")
      
      }
    
      else{

        toast('something went wrong');
        setata({email:'',
        password:''})

      }


      // Handle successful response, e.g., redirect the user
    } catch (error) {
      toast('something went wrong');
      console.error('Error:', error);
      // Handle error, e.g., display an error message to the user
    }
  }
  
  return (
    <div className='abc'>
      <h1>sign in</h1>
      <form method='post' onSubmit={(e)=>(e.preventDefault())}>

<input type='email' placeholder='email' name='email' value={ata.email} onChange={formhandle}/>

<input type='password' placeholder='password' name='password' value={ata.password} onChange={formhandle}/>

<button onClick={abc}>submit</button>
      </form>
    </div>
  )
}

export default Login
