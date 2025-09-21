import { TodoService } from './../../services/todo-service/todo-service';
import { Component, inject, OnInit } from '@angular/core';
import { TodolistService } from '../../services/todolist-service/todolist-service';
import { LocalStorage } from '../../services/local-storage/local-storage';
import { CommonModule } from '@angular/common';
import { TaskFilterPipe } from "../../pipes/task-filter-pipe";
import { Todo } from '../../interface/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-todo',
  imports: [CommonModule, TaskFilterPipe, FormsModule],
  templateUrl: './show-todo.html',
  styleUrl: './show-todo.css',
})
export class ShowTodo implements OnInit {

  tasks: Todo[] = []
  todoListApi: any[] = []
  selectedFilter: string = 'All'

  todolist = inject(TodolistService)
  localStorage = inject(LocalStorage)

  constructor(private todoService:TodoService) {
    
  }

  ngOnInit(){
    this.todoService.todos$.subscribe(todos =>{
      this.tasks = todos
    })
    this.loadTodosApi();
    // this.loadLocalTodos()
  }

  // loadLocalTodos(){
  //   this.tasks = this.localStorage.getTasks()
  // }

  toggleDone(i : number){
    this.tasks[i].isDone = !this.tasks[i].isDone
    // this.localStorage.setTasks(this.tasks)
    this.todoService.updateTodos(this.tasks)
  }

  deleteTask(i:number){
    this.tasks.splice(i,1)
    // this.localStorage.setTasks(this.tasks)
    this.todoService.updateTodos(this.tasks)
  }

  loadTodosApi() {
    this.todolist.getTodoList().subscribe((todos) => {
      // console.log('API Response:', todos);
      this.todoListApi = todos;
      // console.log('todoListApi:', this.todoListApi);
      // this.tasks = todos
    },
    (error) => {
      console.error('Getting error in API',error);
      this.todoListApi = []
      // this.tasks = []
    });
  }

  toggleCompleteApi(todo: any, index: number) {
    this.todoListApi[index].completed = !this.todoListApi[index].completed;
    this.saveTodosApi();
  }

  deleteTodoApi(index: number) {
    this.todoListApi.splice(index, 1);
    this.saveTodosApi();
  }

  saveTodosApi() {
    this.localStorage.setTasksApi([JSON.stringify(this.todoListApi)]);
  }
}
