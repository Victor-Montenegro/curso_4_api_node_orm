class PessoaController
{
    async GetAll(req, res, next)
    {
        try 
        {
            console.log('Retornando todas as pessoas');

            res.status(200).send("messagem")
        } 
        catch (exception)
        {
            next(exception);
        }
    }
}

module.exports = PessoaController;