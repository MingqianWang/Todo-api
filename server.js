var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
  id: 1,
  description: 'do coursework',
  completed: false
}, {
  id: 2,
  description: 'do syseng dev',
  completed: false
}, {
  id: 3,
  description: 'play HotS',
  completed: true
}];

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

app.listen(PORT, function () {
  console.log("server started at port:" + PORT );
});