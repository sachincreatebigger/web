import mongoose, { model } from "mongoose";

let contactschema=new mongoose.Schema({
name:'String',
email:'String',

message:'String',


}) 






let contactmodel=mongoose.model('contactmernadmin',contactschema) 
export default contactmodel