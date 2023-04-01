
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routers/routes');
const authRoute = require('./routers/authRoute')

require("dotenv").config()


const app = express();


mongoose.connect(process.env.DATABASE_URL,{useUnifiedTopology:true})
.then(()=>{
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/auth',authRoute)
    app.use('/api',routes);

}).catch(error=>{console.log('Error Occured while connecting to database : ',error)});

const db = mongoose.connection;

db.once("open",()=>{
    console.log('Connected Successfully!')
});






app.listen(process.env.PORT,()=>{
    console.log(`listening to the port ${process.env.PORT}`)
});







