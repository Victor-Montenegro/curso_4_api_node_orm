const CategoriaService = require('../Services/CategoriaService.js');
const ControllerBase = require('./ControllerBase.js');

module.exports = class CategoriaController extends ControllerBase
{
    constructor()
    {
        super(new CategoriaService());
    }
}