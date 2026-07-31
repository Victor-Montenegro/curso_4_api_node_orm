const { pessoaRouter } = require("./PessoaRouter.js");
const { categoriaRouter } = require("./CategoriaRouter.js");
const { matriculaRouter } = require("./MatriculaRouter.js");
const { cursoRouter } = require("./CursoRouter.js");

module.exports = AddRouters = (app) => 
{
    app.get('/', (_ , res) =>
    {
        res.status(200);
        res.send('Curso de Node.js Api');
    });

    app.use(
        matriculaRouter,
        pessoaRouter,
        cursoRouter,
        categoriaRouter);
};