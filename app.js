const express = require('express');

const app = express();

app.get('/', function(req, res) { res.send ('Hola mundo soy Angel Garcia Marin');});

app.listen(3000);