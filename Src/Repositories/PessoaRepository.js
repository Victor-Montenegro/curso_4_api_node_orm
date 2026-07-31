const RepositoryBase = require('./Abstractions/RepositoryBase');
const databaseIndex = require('./Entities');

module.exports = class PessoaRepository extends RepositoryBase
{
    constructor()
    {
       super(databaseIndex.Pessoa);
    }

    async AtualizarIdentificaoPorIdAsync(
        id,
        nome, 
        email)
    {
        await this._table.update(
            {nome: nome, email: email},
            { where: { id: id}});
    }
}