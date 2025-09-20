import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  apiUrl = 'https://jsonplaceholder.typicode.com/todos'
  
  http = inject(HttpClient)
  todoList$ = new Observable

  constructor(){
    this.getTodoList()
  }
  
  getTodoList(){
    this.todoList$ = this.http.get(this.apiUrl)
    console.log("Getting Data form Api:",this.todoList$);
  }
}
