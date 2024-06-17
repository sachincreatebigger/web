import axios from 'axios'
import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import "./Adminaddservices.css"

const Adminaddservices = () => {
    let[data,setdata]=useState({
title:'',
description:'',
price:''


    })
    let name
    let value
    let handleform=(e)=>{
name=e.target.name
value=e.target.value
setdata({...data,[name]:value})



    }
   async function abc(){
console.log(data)
let response=await axios.post("http://localhost:3000/services",data)
console.log(response.data)

location.reload()
    }
  return (
    <div classname='con'>
      <h5> Adminaddservices from

<form action='/Adminlayout/addservices' method="post" onClick={(e)=>{e.preventDefault()}}>

<input type="text" placeholder='title' name='title' value={data.title} onChange={handleform}></input>
<input type="text" placeholder='description' name='description' value={data.description} onChange={handleform}></input>
<input type="text" placeholder='price' name='price' value={data.price} onChange={handleform}></input>

<button onClick={abc} className='btn'>submit </button>


</form>



      </h5>
    </div>
  )
}

export default Adminaddservices
