const RepositoryBase = require('./Abstractions/RepositoryBase');
const databaseIndex = require('./Entities');

module.exports = class CategoriaRepository extends RepositoryBase
{
    constructor()
    {
       super(databaseIndex.Categoria);
    }
}