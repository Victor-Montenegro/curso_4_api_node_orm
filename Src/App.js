const express = require('express');
// const HandlerError = require('./Middlewares/ErrorMiddleware.js');
const AddRouters = require('./Routers/Index.js');

const app = express();

app.use(express.json());
AddRouters(app);
// app.use(HandlerError);

module.exports = app;