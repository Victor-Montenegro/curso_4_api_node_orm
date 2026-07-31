const MatriculaRepository = require('../Repositories/MatriculaRepository.js');
const ServiceBase = require('./ServiceBase.js');

module.exports = class MatriculaService extends ServiceBase
{
    constructor()
    {
        super(new MatriculaRepository);
    }
}