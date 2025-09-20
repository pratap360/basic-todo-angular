import { Component, inject, OnInit } from '@angular/core';
import { TodolistService } from '../../services/todolist-service/todolist-service';
import { LocalStorage } from '../../services/local-storage/local-storage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-todo',
  imports: [CommonModule],
  templateUrl: './show-todo.html',
  styleUrl: './show-todo.css',
})
export class ShowTodo implements OnInit {

  todoListApi: any[] = []

  todolist = inject(TodolistService)
  localStorage = inject(LocalStorage)

  ngOnInit(){
    this.loadTodos();
  }

  loadTodos() {
    console.log('Loading todos...');
    this.todolist.getTodoList().subscribe((todos) => {
      // console.log('API Response:', todos);
      this.todoListApi = todos;
      // console.log('todoListApi:', this.todoListApi);
    },
    (error) => {
      console.error('Getting error in API',error);
      this.todoListApi = []
    });
  }

  toggleComplete(todo: any, index: number) {
    this.todoListApi[index].completed = !this.todoListApi[index].completed;
    this.saveTodos();
  }

  deleteTodo(index: number) {
    this.todoListApi.splice(index, 1);
    this.saveTodos();
  }

  saveTodos() {
    this.localStorage.setTasks([JSON.stringify(this.todoListApi)]);
  }
}
