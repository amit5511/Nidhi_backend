const express=require('express');
const app=express();
const bodyParser =require('body-parser');

//cookies setup
const cookieParser = require("cookie-parser");
app.use(cookieParser());




// app.use(function(req, res, next) {
//     console.log(req.headers);
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Headers', 
//                'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     next();
//   });

const cors=require('cors');
app.use(cors({
    credentials: true,
    origin:['http://localhost:4200','http://localhost:3000'],
   
   
}));

//middleware parses incoming requests with JSON
app.use(express.urlencoded({extended:false}));
app.use(express.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb',extended:true}));



//user route setup
const user_router = require('./router/user_route');
app.use('/api/v1',user_router);


app.get('*',(req,res)=>{
    res.status(201).json({
        "success":true,
        "message":"Runing fine"
    })
})


module.exports=app;