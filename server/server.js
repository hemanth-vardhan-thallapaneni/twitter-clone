
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routers/routes');
var multer = require('multer');
var upload = multer();
require("dotenv").config()

// adminsecret_key = ODLJ7xZ5z5ONcxSqBlgR3MGwNbaZdLwUPmGXdmcs;
// adminaccess key = AKIAZMOUXKCTF7YGHHXD

// hemanth_secreat key = YlBHx3YEtizLC48AHVOlRpwiWyPfHJWBMth71q0G;
// admin_access_key = AKIAZMOUXKCTGSBJJ26E



const corsOptions ={
    origin:'http://localhost:4200', 
    credentials:true, 
    optionSuccessStatus:200
}
const app = express();
// app.use(upload.array()); 
// app.use(express.static('public'));





mongoose.connect(process.env.DATABASE_URL,{useUnifiedTopology:true})
.then(()=>{
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use('/api',routes);

}).catch(error=>{console.log('Error Occured while connecting to database : ',error)});

const db = mongoose.connection;

db.once("open",()=>{
    console.log('Connected Successfully!')
});






app.listen(process.env.PORT,()=>{
    console.log(`listening to the port ${process.env.PORT}`)
});







