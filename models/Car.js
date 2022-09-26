const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    brand: {
        type:String,
        required:true
    }, 
    model: {
        type:String,
        required:true
    }, 
    category:{
        type:String,
        required:true
    }, 
    characteristics: {
        type:String,
        required:true
    }, 
    motor: {
        type:String,
        required:true
    }, 
    price: {
        type:String,
        required:true
    }, 
    file: {
        type:String,
        required:true
    }, 
    createDate: {
        type:Date,
        default: Date.now()
    }, 
})

module.exports = mongoose.model('Car', carSchema);