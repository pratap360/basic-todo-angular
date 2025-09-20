import { Component, inject } from '@angular/core';
import { TodolistService } from '../../services/todolist-service/todolist-service';

@Component({
  selector: 'app-show-todo',
  imports: [],
  templateUrl: './show-todo.html',
  styleUrl: './show-todo.css'
})
export class ShowTodo {

  constructor(private showTodoList: TodolistService){
    this.showTodoList.getTodoList()
  }
}
