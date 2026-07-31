const CategoriaRepository = require('../Repositories/CategoriaRepository.js');
const ServiceBase = require('./ServiceBase.js');

module.exports = class CategoriaService extends ServiceBase
{
    constructor()
    {
        super(new CategoriaRepository);
    }
}