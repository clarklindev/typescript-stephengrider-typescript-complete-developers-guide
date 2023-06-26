import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/1";

//TYPESCRIPT: interface
interface Todo{
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;  //TYPESCRIPT: as interface

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);

});

//TYPESCRIPT: give type annotations to function parameters
const logTodo = (id:number, title: string, completed:boolean) => {
  console.log(`${id} ${title} ${completed}`)
}