import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../../interface/todo';
import { LocalStorage } from '../local-storage/local-storage';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todosSubject.asObservable();

  constructor(private localStorage: LocalStorage) {
    this.loadTodos();
  }

  loadTodos() {
    const todos = this.localStorage.getTasks();
    this.todosSubject.next(todos);
  }

  addTodo(todo: Todo) {
    const currentTodos = this.todosSubject.value;
    const updatedTodos = [...currentTodos, todo];
    this.localStorage.setTasks(updatedTodos);
    this.todosSubject.next(updatedTodos);
  }

  updateTodos(todos: Todo[]) {
    this.localStorage.setTasks(todos);
    this.todosSubject.next(todos);
  }
}
