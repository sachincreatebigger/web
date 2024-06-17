import axios from 'axios'
import React, { useEffect ,useState} from 'react'
import "./Adminuser.css"
const Adminuser = () => {

  let[data,setdata]=useState([])
  async function dataget(){
    let dat=await axios.get('http://localhost:3000/mernuser',(response)=>{
    
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
    <div>Adminuser
      {

data && data.map((e,i)=>

<div className='con'>
<div>name:{e.name}</div>

<div>email:{e.email}</div>

  </div>


)




}
    </div>
    
  )
}

export default Adminuser