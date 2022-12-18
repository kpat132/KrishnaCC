//Creating an express server
const express = require('express');
let app = express();

let port = process.env.port || 8081;

app.use(express.static("public"));

app.get('/test', function (req,res){
    res.send('Smoke Test!');
})

app.listen(port, (req,res)=>{
    console.log("Server listening at port", port)
})

