import { Injectable } from '@angular/core';
import { Todo } from 'src/models/todo';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  saveTodo(todos: Todo []) {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  getTodo(): Todo[]{
    return JSON.parse(localStorage.getItem('todos') || '[]');
  }
  deleteTodo(todos: Todo [], index: number) {
    todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  doneTodo(todos: Todo [], index: number) {
    todos[index].isDone = true;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  noDoneTodo(todos: Todo [], index: number) {
    todos[index].isDone = false;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}
