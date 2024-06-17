import mongoose from "mongoose";
let servicesschema=new mongoose.Schema({
title:"String",
description:"String",
price:'Number'

    
})
let servicesmodel=mongoose.model('services',servicesschema)
export default servicesmodel