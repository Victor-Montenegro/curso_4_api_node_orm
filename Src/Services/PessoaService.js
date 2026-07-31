const PropertyNullException = require('../Exceptions/PropertyNullException.js');
const PessoaRepository = require('../Repositories/PessoaRepository.js');
const ServiceBase = require('./ServiceBase.js');

module.exports = class PessoaService extends ServiceBase
{
    constructor()
    {
        super(new PessoaRepository);
    }

    async UpdateByIdAsync(pessoaRequest, id)
    {
        var {nome, email} = pessoaRequest;

        PropertyNullException.ThrowIfPropertyIsNull(nome, 'nome');
        PropertyNullException.ThrowIfPropertyIsNull(email, 'email');

        await this._repository.AtualizarIdentificaoPorIdAsync(id, nome, email);
    }
   
}