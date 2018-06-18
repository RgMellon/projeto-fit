#Parte do Backend
  Como proposto no desafio, foi utilzado o php
para fazer o backend, porém eu tomei a liberdade
de utilizar um dos frameworks php que mais gosto e utilizo
na atualidade, o Laravel.

  O processo foi o seguinte: uma rota do tipo get foi criada (/api/v1/planos),
nela chamando um controller,  que chamara a model e que por sua vez fara a busca
no banco de dados pois as informações estão no banco de dados (mysql),com isso a
model devolve para o controller que transformara o conteudo em json e devolvera
uma resposta.

  Foi feito o deploy da aplicação no heroku, logo tanto a api quanto a parte do front
pode ser vistas.

>O resultado final da api está disposto aqui
  [api-fit](https://api-fit.herokuapp.com/api/v1/planos).





