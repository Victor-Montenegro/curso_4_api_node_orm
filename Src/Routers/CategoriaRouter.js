const { Router } = require('express');
const CategoriaController = require('../Controllers/CategoriaController')

var categoriaRouter = Router();
var categoriaController = new CategoriaController();

categoriaRouter.get('/categorias',(req,res,next) => categoriaController.GetAllAsync(req, res, next));

categoriaRouter.get('/categorias/:id', (req,res,next) => categoriaController.GetByIdAsync(req, res, next));

categoriaRouter.post('/categorias', (req,res,next) => categoriaController.CreateAsync(req, res, next));

module.exports = { categoriaRouter };