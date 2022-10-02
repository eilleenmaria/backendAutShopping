const express =require ('express');
const conectDB = require ('./config/db');
const { populate } = require('./models/Car');
const cors = require ('cors');
const path = require ('path');
require('dotenv').config({path:'cvariable.env'});
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

// Read the host address and the port from the environment
const hostname = process.env.HOST_DB;
const port = process.env.PORT_DB;


app.listen(port,hostname, (err) =>{
    if(err){
        console.log(`Was an error ${err}`);
    }else{
        console.log(`Server running http://${hostname}:${port}/`);
    }
    
})