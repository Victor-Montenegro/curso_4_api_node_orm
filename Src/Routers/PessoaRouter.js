const { Router } = require('express');
const PessoaController = require('../Controllers/PessoaController')

var pessoaRouter = Router();
var pessoaController = new PessoaController();

pessoaRouter.get('/pessoas', pessoaController.GetAll);

// livroRouter.post('/livros/nomeAutor', livroController.GetLivrosByNomeAutor);

// livroRouter.post('/livros/paginated/query', livroController.GetPaginatedLivrosByFilter);

// livroRouter.post('/livros/query', livroController.GetLivrosByFilters);

// livroRouter.get('/livros/editora', livroController.GetLivrosByEditora);

// livroRouter.get('/livros/:id', livroController.GetLivrosById);

// livroRouter.post('/livros', livroController.CreateLivro);

// livroRouter.put('/livros/:id', livroController.UpdateLivroById);

// livroRouter.delete('/livros/:id', livroController.DeleteLivroById);

module.exports = { pessoaRouter };