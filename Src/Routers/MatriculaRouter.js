const { Router } = require('express');
const MatriculaController = require('../Controllers/MatriculaController.js')

var matriculaRouter = Router();
var matriculaController = new MatriculaController();

matriculaRouter.get('internal/matriculas',(req,res,next) => matriculaController.GetAllAsync(req, res, next));

matriculaRouter.get('internal//matriculas/:id', (req,res,next) => matriculaController.GetByIdAsync(req, res, next));
matriculaRouter.post('internal/matriculas', (req,res,next) => matriculaController.CreateAsync(req, res, next));

module.exports = { matriculaRouter };