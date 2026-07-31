const MatriculaService = require('../Services/MatriculaService.js');
const ControllerBase = require('./ControllerBase.js');

module.exports = class MatriculaController extends ControllerBase
{
    constructor()
    {
        super(new MatriculaService());
    }
}