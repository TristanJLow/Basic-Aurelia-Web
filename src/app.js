import {Todo} from './todo';

export class App {
  constructor() {
    this.heading = "Todos";
    this.todos = [];
    this.todoDescription = '';
    this.todoTime = '';
  }

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription, this.todoTime));
      this.todoDescription = '';
      this.todoTime = '';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  sortTodoTime() {
    // Sort through this.todo by date, return stuff
  }
  
  sortTodoCompleted() {
    // Sort through this.todo by date completed, return stuff
  }


}