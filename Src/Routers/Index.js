import pessoaRouter from "./PessoaRouter.js";

const AddRouters = (app) => 
{
    app.get('/', (_ , res) =>
    {
        res.status(200);
        res.send('Curso de Node.js Api');
    });

    app.use(pessoaRouter);
}

export default AddRouters;