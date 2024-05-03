const express = require('express');
const path = require('path');

const app = express();
const port = 7700;

// index.html 파일을 제공합니다.
app.get('/', (req, res) => {

    res.sendFile(path.join(__dirname, 'index.html'));
});


// config.json의 execute, save, publish, validate, stop
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


// 서버를 시작합니다.
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
