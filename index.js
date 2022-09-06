const express =require ('express');
const conectDB = require ('./config/db');
const { populate } = require('./models/Car');
const cors = require ('cors');

// we create the server
const app = express();
// we connect the server
conectDB();
app.use(cors());
app.use(express.json());

app.use('/api/car', require('./routes/car'));



app.listen(4000, () =>{
    console.log("Server running port 4000")
})