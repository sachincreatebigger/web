import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
let userschema=new mongoose.Schema({
name:'String',
email:'String',
password:'String',
number:'String',
isadmin:{
    type:'Boolean',
    default:false
}

}) 

/////////pre save method of schema 

// Pre-save middleware to hash the password
userschema.pre('save', async function(next) {
    console.log('Pre-save method', this);
    let user = this;

   
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (err) {
        next(err);
    }
});



////////////instance function 
userschema.methods.getjwttoken=async function (){
try{
return jwt.sign({
email:this.email


},'secerat')


}
catch(err){

console.log(err)

}

}




let usermodel=mongoose.model('mernadmin',userschema) 
export default usermodel