const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routerBooks = require('./router/books');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routerBooks);
app.use(express.static(path.join(__dirname, '/views')));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.get('/sobre', function(req, res){
    res.sendFile(path.join(__dirname+'/views/sobre.html'));
});

app.listen(3000, () => console.log("server is running in port 3000"));