import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import "./Admincontact.css"
const Admincontact = () => {
  let[data,setdata]=useState([])
  async function dataget(){
    let dat=await axios.get('http://localhost:3000/merncontact',(response)=>{
    
    console.log(response) 
    setdata(response)
    
    })
    setdata(dat.data.response)
    console.log(dat.data.response) 
    }
    
     
    useEffect(()=>{
    
    dataget()
    
    
    
    },[])
    
    
    
  return (
    <div className='con'>Admincontact
{

data && data.map((e,i)=>

<div>
<div>name:{e.name}</div>
<div>message:{e.message}</div>
<div>email:{e.email}</div>

  </div>


)




}



    </div>
  )
}

export default Admincontact