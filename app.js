// Importando as dependências
const express = require('express');

// Inicializando o aplicativo Express
const app = express();

// Definindo a rota básica para verificar se a API está funcionando
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Definindo a porta em que o servidor irá ouvir
const PORT = process.env.PORT || 7320;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
