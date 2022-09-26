const express =require ('express');
const conectDB = require ('./config/db');
const { populate } = require('./models/Car');
const cors = require ('cors');
const path = require ('path');
// we create the server
const app = express();
// we connect the server
conectDB();

//middlewares
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname,'/public')));

//routes
app.use( require('./routes/car'));



app.listen(4000, (err) =>{
    if(err){
        console.log(`Was an error ${err}`);
    }else{
        console.log("Server running port 4000");
    }
    
})