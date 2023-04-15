import { Component } from '@angular/core';
import { Todo } from 'src/models/todo';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private storageService: StorageService) {
    this.todos = this.storageService.getTodo();
  }

  todos: Todo[] = [];
  newTodo: string;

  addTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      this.todos.push(todo);
      this.newTodo = '';
      todo.isDone = false;
      this.storageService.saveTodo(this.todos);
    } else {
      alert('Ajouter une tâche');
    }
  }

  update(id: number) {
    let todoEdit = prompt('Modifier la tâche', this.todos[id].name) as string;
    this.todos[id].name = todoEdit;
  }

  isDone(id: number) {
    this.storageService.doneTodo(this.todos, id);
  }

  noDone(id: number) {
    this.storageService.noDoneTodo(this.todos, id);
  }

  remove(id: number) {
    this.storageService.deleteTodo(this.todos, id);
  }
}
