const express=require('express');
const app=express();


//cookies setup
const cookieParser = require("cookie-parser");
app.use(cookieParser());







//user route setup
const user_router = require('./router/user_route');
app.use('/api/v1',user_router);


app.get('*',(req,res)=>{
    res.status(201).json({
        success:true,
        message:"Runing fine"
    })
})


module.exports=app;