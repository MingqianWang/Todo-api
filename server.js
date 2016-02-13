var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Todo API Root');
});

app.get('/todos', function (req, res) {
  res.json(todos);
});

app.get('/todos/:id', function (req, res) {
　var todoId = parseInt(req.params.id, 10);
  var mactchTodo;

  todos.forEach(function (todo) {
    if(todoId === todo.id) {
      mactchTodo = todo;
    }
  });

  if(mactchTodo) {
    res.json(mactchTodo);
  } else {
    res.status(404).send();
  }
});

app.post('/todos', function (req, res) {
  var body = req.body;
  body.id = todoNextId++;
  todos.push(body);
  res.json(body);
});


app.listen(PORT, function () {
  console.log("server started at port:" + PORT );
});













