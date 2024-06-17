import usermodel from "../modal/user-model.js"
import bcrypt from "bcrypt"
import contactmodel from "../modal/contact-model.js"
import servicesmodel from "../modal/services-model.js"

import cors from "cors"
import bodyParser from "body-parser"
import { response } from "express"

let register=async(req,res)=>{

try{
let a=await usermodel.create({
name:req.body.name,
email:req.body.email,
password:req.body.password,
number:req.body.number


}) 
    console.log(a)
    let token= await a.getjwttoken()
    res.json({a,token}) 

}
catch(err){

console.log(err)
}


}













////////login logic 

let login=async(req,res)=>{

let useremail=await usermodel.findOne({email:req.body.email})

if (useremail) {
    let loginuser=await bcrypt.compare(req.body.password, useremail.password) 
        console.log(loginuser)
   
        if (loginuser) {
          
            let token = await useremail.getjwttoken()  
          
          
           
        res.json({useremail, token})
             
           
        }
        else{
            console.log("password incorrect")
        
        }

  
 
}


else{
console.log('email not match')
res.send('email not match')


}

}





//////////////////contact model logic
let contact=async(req,res)=>{
try{

    let c=await contactmodel.create({
        name:req.body.name,
        email:req.body.email,
       
        message:req.body.message
        
        
        }) 
        res.send(c)
}
catch(err){

console.log(err)

}

}


/////////////////
////////////////
/////////////////
////////////////
/////////////////
////////////////
/////////////////
////////////////
//////////////////////////////////userdata
////////////////

let userdata=async(req,res)=>{
try{
//     const token = req.headers['authorization'];
// //let token=header(Authentication)
let token=req.user
console.log('token token token token toen '+token)
res.json({token });

}

catch(err){


console.log(err)


}



}








////////////////
/////////////////
////////////////
/////////////////
////////////////
/////////////////
////////////////
////////////////
/////////////////
////////////////services
let services=async(req,res)=>{

try{
    let response=await servicesmodel.find()

console.log(response)
res.json(response)
}
catch(err){

console.log(err)



}



}
/////////////////
////////////////
/////////////////
////////////////
/////////////////
////////////////
/////////////////
////////////////
//////////////////////////////////userdata
////////////////servicespostdelet

let servicespostdelet=async(req,res)=>{
try{
let id =req.params.id
let response=await servicesmodel.deleteOne({_id:id})
res.json({response})
}

catch(err){
console.log(err)


}

}







////////////////
////////////////
/////////////////
////////////////
/////////////////
////////////////
//////////////////////////////////mernUser
let mernuser=async(req,res)=>{
try{
let response=await usermodel.find()
console.log(response)
res.json({response})

}
catch(err){

console.log(err)


}

}

////////////////
////////////////
/////////////////
////////////////
/////////////////
////////////////
/////////////////
////////////////merncontact


let merncontact=async(req,res)=>{

   let response=await contactmodel.find()
console.log(response)

res.json({response})
}

////////////////
/////////////////
////////////////
//////////////////////////////////userdata
////////////////servicesmodel post method
let servicespost=async(req,res)=>{
try{
console.log(req.body)
let response= await servicesmodel.create({
title:req.body.title,
description:req.body.description,

price:req.body.price
})
res.json({response})
}
catch(err){
console.log(err)

}




}


export default register
export {login,contact,userdata,services,mernuser,merncontact,servicespost,servicespostdelet}