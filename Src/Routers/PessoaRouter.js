const { Router } = require('express');
const PessoaController = require('../Controllers/PessoaController')

var pessoaRouter = Router();
var pessoaController = new PessoaController();

pessoaRouter.get('/pessoas',(req,res,next) => pessoaController.GetAllAsync(req, res, next));

pessoaRouter.get('/pessoas/:id', (req,res,next) => pessoaController.GetByIdAsync(req, res, next));

pessoaRouter.put('/pessoas/:id', (req,res,next) => pessoaController.UpdateByIdAsync(req, res, next));

pessoaRouter.post('/pessoas', (req,res,next) => pessoaController.CreateAsync(req, res, next));


// livroRouter.post('/livros/nomeAutor', livroController.GetLivrosByNomeAutor);

// livroRouter.post('/livros/paginated/query', livroController.GetPaginatedLivrosByFilter);

// livroRouter.post('/livros/query', livroController.GetLivrosByFilters);

// livroRouter.get('/livros/editora', livroController.GetLivrosByEditora);

// livroRouter.get('/livros/:id', livroController.GetLivrosById);

// livroRouter.post('/livros', livroController.CreateLivro);


// livroRouter.delete('/livros/:id', livroController.DeleteLivroById);

module.exports = { pessoaRouter };