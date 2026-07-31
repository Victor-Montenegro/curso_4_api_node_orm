const CursoService = require('../Services/CursoService.js');
const ControllerBase = require('./ControllerBase.js');

module.exports = class CursoController extends ControllerBase
{
    constructor()
    {
        super(new CursoService());
    }
}