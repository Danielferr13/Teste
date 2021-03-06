  
const express = require('express');
const app = express();
const porta = 3000;
const estudantes = require('./alunos.json')

//@router GET /estudantes
//@desc Retorna todos os estudantes
//@access Public
app.get('/estudantes', function(requisicao, resposta){
  resposta.json(estudantes);
});

//@router GET /estudantes
//@desc Retorna todos os estudantes
//@access Public
app.get('/estudantes/:id', function(requisicao, resposta){
  resposta.json(estudantes);
});


app.use(express.json());
app.listen(porta, function(){
  console.log("Servidor rodando na porta" + porta)
});