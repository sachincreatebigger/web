import axios from "axios";
import React from "react";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";


let Apple=createContext()

let tokensendfunction=(tokenvalue)=>{

    return localStorage.setItem('token',tokenvalue)
    }
  











let Applecover=({children})=>{
    let[token,settoken]=useState(localStorage.getItem('token'))
    let userlogginornot=!!token
    let[userfulldetail,setuserfulldetail]=useState('')
    let[servicesdata,setservicesdata]=useState([])
    console.log(userlogginornot)
    function logoutuserfunction(){
     
        settoken('')
        return localStorage.removeItem('token')
            }



//////////send data to the user logic /user route send data
let senddatatouser=async()=>{
    try{

        let response= await axios.get("http://localhost:3000/userdata",{
            headers:{
                'Authorization': token
            
            
            
            }
            
            
            })
            console.log(response) 
            let finaluserdetail=response.data
            console.log(finaluserdetail)
            console.log(response.data)  
        setuserfulldetail(finaluserdetail)

    }
    catch(err){
        console.log('errrr r r r r r r r  r'+err)
    }
   
    }


    let findservicesdata=async()=>{

let res=await axios.get("http://localhost:3000/services",(response)=>{

// console.log(response)

})
// console.log(res.data)
setservicesdata(res.data)

    }





    useEffect(()=>{
        senddatatouser()
         findservicesdata()
    
    },[])


    
    
    
    
    
    /////////
 
    












return <Apple.Provider value={{tokensendfunction,logoutuserfunction,userlogginornot,userfulldetail,servicesdata,findservicesdata}}>{children}</Apple.Provider>


}


///cutom 
function senddata(){

return useContext(Apple)

}
export{Apple,Applecover,senddata}