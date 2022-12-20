//Creating an express server
const express = require('express');
const app = express();
const path = require("path");

const bodyParser = require('body-parser');
const cors = require('cors');

let port = process.env.port || 8081;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });

app.get('/test', function (req,res){
    res.send('Smoke Test!');
})

app.post('/login',(req,res)=>{
    console.log('login route');
})

app.listen(port, (req,res)=>{
    console.log("Server listening at port", port)
})

