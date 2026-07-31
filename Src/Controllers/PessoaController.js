const PessoaService = require('../Services/PessoaService.js');
const ControllerBase = require('./ControllerBase.js');

module.exports = class PessoaController extends ControllerBase
{
    constructor()
    {
        super(new PessoaService());
    }

    async AtualizarIdentificaoPorIdAsync(req, res, next)
    {
        var pessoaId = req.params.id;
        var pessoaRequest = req.body;
        try
        {
            await this._serviceBase.AtualizarIdentificaoPorIdAsync(pessoaRequest, pessoaId);

            res.status(200).send('Dados de pessoa atualizado');
        } 
        catch (exception)
        {
            next(exception);
        }
    }
}