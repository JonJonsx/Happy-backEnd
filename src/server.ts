import express from 'express';

const app = express();

// Rota = conjunto
// Recurso = usuario
// Metodos HTTP = GET, POST, PUT, DELETE
// Parâmentros

// GET = Buscar uma informação (Lista, item)
// POST = Criando usa informação
// PUT = editando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users/1 (Identificar um recurso)

app.get('/users/:id',(request,response) =>{
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);
    return response.json({mensagem: 'hello world'});
})

app.listen(3333);