import express from "express"
import router from "./router/register-router.js"
import connectiondb from "./config-utils/db.js"
import cors from "cors"
import bodyParser from "body-parser"


let app=express() 
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
connectiondb().then(() =>{

    console.log('connect to database sucessfully') 
})  
app.use(router)




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});