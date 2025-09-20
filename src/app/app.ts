import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTodos } from './components/create-todos/create-todos';

@Component({
  selector: 'app-root',
  imports: [CreateTodos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'todo-list';
}
