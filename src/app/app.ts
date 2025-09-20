import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTodos } from './components/create-todos/create-todos';
import { ShowTodo } from "./components/show-todo/show-todo";

@Component({
  selector: 'app-root',
  imports: [CreateTodos, ShowTodo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo-list';
}
