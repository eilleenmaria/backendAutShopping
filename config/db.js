const mongoose = require('mongoose');

require('dotenv').config({path:'cvariable.env'});

const conectDB = async() =>{
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_DB)
        console.log("Connected BD")
    }catch(error){
        console.log(error)
        process.exit(1);
    }
   
}

module.exports = conectDB