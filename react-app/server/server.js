//Creating an express server
const express = require('express');
const app = express();
const path = require("path");

let port = process.env.port || 8081;
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });

app.get('/test', function (req,res){
    res.send('Smoke Test!');
})

app.listen(port, (req,res)=>{
    console.log("Server listening at port", port)
})

