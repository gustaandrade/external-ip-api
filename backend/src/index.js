const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const port = process.env.PORT || 3333;

const app = express();

const server = require('http').Server(app);

app.use(cors());
app.use(routes);

server.listen(port);
