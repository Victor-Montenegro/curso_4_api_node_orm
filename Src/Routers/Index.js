const { pessoaRouter } = require("./PessoaRouter.js");

module.exports = AddRouters = (app) => 
{
    app.get('/', (_ , res) =>
    {
        res.status(200);
        res.send('Curso de Node.js Api');
    });

    app.use(pessoaRouter);
};