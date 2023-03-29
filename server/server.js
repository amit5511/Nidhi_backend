const app=require('./app');
const path=require('path')

//configure dot env
const dotenv = require("dotenv");
dotenv.config({ path: "server/configure/.env" });


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Accept, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const cors=require('cors');
app.use(cors({
    credentials: true,
    origin:['http://localhost:3000'],
   
   
}));

//mogodb connection
const db_connection = require('./configure/dbConnection');
const URL=process.env.db_URL;

db_connection(URL);









const PORT=process.env.PORT
// server setup
app.listen(PORT,()=>{
    console.log(`Server is runing on PORT : ${PORT}`)
})
