const CursoRepository = require('../Repositories/CursoRepository.js');
const ServiceBase = require('./ServiceBase.js');

module.exports = class CursoService extends ServiceBase
{
    constructor()
    {
        super(new CursoRepository);
    }
}