# Parte do Back-end

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

# Parte do Front-end

  Na parte do front-end foi utilizado o vue-js,
fazendo uma separação basica em paginas, pasta
pages, que contem a pagina Home, que é o primeiro
componente a ser chamado, nele ao ser montado
a primeira coisa que fara é buscar os dados
da api, getAllPlanos() que está dentro de uma
pasta chamada service, tendo como objetivo
fazer uma requisição do tipo get para nossa
api, utilizano a fetch api e arrow function
para ficar mais sussinto, com isso ela pega
o resultado e transforma em json, e como é utilizado
uma Promise, logo o acesso dela ficará disponivel
no component Home, que por sua vez mandara esse objeto
para um state, para ser manipulado depois.

  Um detalhe que pode ser notado é que estou usando vuex
para uma separação mais limpa.

  Com isso a Pagina principal Home é composta
por outros componentes, sendo o Header, CampoBusca e Card,
que pode ser encontrados dentro de components,
cada um tendo apenas uma função, como por exemplo card, que
monta a imagem e o nome conforme o loop de dados vindo da api, e busca, que apenas tem a responsabilidade de efetuar uma busca.

  A parte do css foi utlizado flex box para organização, com o arquivo
dentro de css/style.css, e um reset.css para resetar as configurações
iniciais.




