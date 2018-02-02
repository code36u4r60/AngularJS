var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());


$scope.contatos = [
  {
    nome: "pedro",
    telefone: "912345678",
    operadora: {
      nome: 'Meo',
      codigo: '96',
      categoria: "Movel"
    },
    data: new Date(),
    cor: "blue"
  },
  {
    nome: "JOÃO",
    telefone: "923456789",
    operadora: {
      nome: 'Meo',
      codigo: '96',
      categoria: "Movel"
    },
    data: new Date(),
    cor: "orange"
  },
  {
    nome: "MaRIa",
    telefone: "967890123",
    operadora: {
      nome: 'PT',
      codigo: '2',
      categoria: "Fixo"
    },
    data: new Date(),
    cor: "cyan"
  },
  {
    nome: "Joana",
    telefone: "934545678",
    operadora: {
      nome: 'Vodafone',
      codigo: '91',
      categoria: "Movel"
    },
    data: new Date(),
    cor: "green"
  },
  {
    nome: "ManuEL",
    telefone: "962345678",
    operadora: {
      nome: 'Vodafone',
      codigo: '91',
      categoria: "Movel"
    },
    data: new Date(),
    cor: "white"
  }
];

$scope.operadoras = [
  { nome: 'Meo', codigo: '96', categoria: "Movel", preco: 2 },
  { nome: 'Vodafone', codigo: '91', categoria: "Movel", preco: 1 },
  { nome: 'Nos', codigo: '93', categoria: "Movel", preco: 1.5 },
  { nome: 'PT', codigo: '2', categoria: "Fixo", preco: 2.5 },
  { nome: 'Fonix', codigo: '65', categoria: "Fixo", preco: 2.5 }
];


app.listen(process.env.PORT || 3412);

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function (req, res) {
  res.json(contatos);
});

app.post('/contatos', function (req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function (req, res) {
  res.json(operadoras);
});
