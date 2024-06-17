import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./register.css"
import { senddata } from './store/usecontext'

const Register = () => {
  let {tokensendfunction}=senddata()
  let[data,setdata]=useState({
name:'',
email:'',
password:'',
number:''


  })
  let nevigate=useNavigate()
  let name
  let value
function handleform(e){
name=e.target.name
value=e.target.value
setdata({...data,[name]:value})


}
async function abc(){
  //http://localhost:3000/register
let response=await axios.post("http://localhost:3000/register",data)
console.log('Response:', response.data.token);
tokensendfunction(response.data.token)
// let response = await axios.post('http://localhost:3000/login', ata);
// console.log('Response:', response.data.token);
console.log(data)
alert("register sucessfully")

  nevigate("/login")



}
  return (
    <div className='abc'>
      <h1>Registration Form</h1>
    
      <form method="get" onSubmit={(e)=>(e.preventDefault())}>
<input type="text" name='name' placeholder='name' onChange={handleform} value={data.name}/>
<input type='email' name='email' placeholder='email' onChange={handleform} value={data.email}/>
<input type="password" name='password' placeholder='password' onChange={handleform} value={data.password}/>
<input type="number" name='number' placeholder='number' onChange={handleform} value={data.number}/>
<button onClick={abc}>submit</button>



      </form>
    </div>
  )


}

export default Register
