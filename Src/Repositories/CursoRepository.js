const RepositoryBase = require('./Abstractions/RepositoryBase');
const databaseIndex = require('./Entities');

module.exports = class CursoRepository extends RepositoryBase
{
    constructor()
    {
       super(databaseIndex.Curso);
    }
}