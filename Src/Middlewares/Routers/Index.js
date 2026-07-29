import livroRouter from "./LivroRouter.js";

const AddRouters = (app) => 
{
    app.get('/', (_ , res) =>
    {
        res.status(200);
        res.send('Curso de Node.js Api');
    });

    app.use(livroRouter);
}

export default AddRouters;