const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //faz a conversão do body para ser legível no JS
app.use(routes);


app.listen(3333);