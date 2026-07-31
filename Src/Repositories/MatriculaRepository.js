const RepositoryBase = require('./Abstractions/RepositoryBase');
const databaseIndex = require('./Entities');

module.exports = class MatriculaRepository extends RepositoryBase
{
    constructor()
    {
       super(databaseIndex.Matricula);
    }
}