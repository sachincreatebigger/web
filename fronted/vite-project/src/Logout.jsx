import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { senddata } from './store/usecontext'
const Logout = () => {
    let {logoutuserfunction}=senddata()
    let naviagte=useNavigate()
    useEffect(()=>{
        logoutuserfunction()
        return naviagte('/login')
    },[logoutuserfunction])
  return (
    
    <div>
      <h1>logout</h1>
    </div>
  )
}

export default Logout
