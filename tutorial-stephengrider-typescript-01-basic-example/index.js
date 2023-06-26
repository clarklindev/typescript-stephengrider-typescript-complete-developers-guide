"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (response) {
    var todo = response.data; //TYPESCRIPT: as interface
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
//TYPESCRIPT: give types to function props
var logTodo = function (id, title, completed) {
    console.log("".concat(id, " ").concat(title, " ").concat(completed));
};
