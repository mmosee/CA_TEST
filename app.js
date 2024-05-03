const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require('path');
const axios = require('axios');

const port = 7700;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html")
});

// config.json에서 정의한 execute, save, publish, validate, stop의 EndPoint
app.post('/execute', function(req, res) {
    console.log('debug: /execute');
    
    console.log(' req.body', JSON.stringify(req.body));
    
    return res.status(200).json({});
});

app.post('/save', function(req, res) {
    console.log('debug: /save');
    return res.status(200).json({});
});

app.post('/publish', function(req, res) {
    console.log('debug: /publish');
    return res.status(200).json({});
});

app.post('/validate', function(req, res) {
    console.log('debug: /validate');
    return res.status(200).json({});
});


app.post('/stop', function(req, res) {
    console.log('debug: /stop');
    return res.status(200).json({});
});

// listen
app.listen(port, () => {
    console.log(`Started ${port}`);
})