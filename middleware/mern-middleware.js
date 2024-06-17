let mernmidleware=async(req,res,next) =>{
 

try{
    console.log('sfsdfsdfsfsf'+req.user) 
let data=req.user

next()
}
catch(err){

console.log(err)
next()
}

}
export default mernmidleware