const { Router } = require('express');
const CursoController = require('../Controllers/CursoController')

var cursoRouter = Router();
var cursoController = new CursoController();

cursoRouter.get('/cursos',(req,res,next) => cursoController.GetAllAsync(req, res, next));

cursoRouter.get('/cursos/:id', (req,res,next) => cursoController.GetByIdAsync(req, res, next));

cursoRouter.post('/cursos', (req,res,next) => cursoController.CreateAsync(req, res, next));

module.exports = { cursoRouter };