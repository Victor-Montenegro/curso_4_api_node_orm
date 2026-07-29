import express from 'express';
import HandlerError from './Middlewares/ErrorMiddleware.js'
import AddRouters from './Middlewares/Routers/Index.js';

const app = express();

app.use(express.json());
AddRouters(app);
app.use(HandlerError);

export default app;