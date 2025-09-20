import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  apiUrl = 'https://jsonplaceholder.typicode.com/todos'
  
  http = inject(HttpClient)
  todoList$ = new Observable

  constructor(){
  }
  
  // getTodoList(){
  //   this.todoList$ = this.http.get(this.apiUrl)
  //   this.todoList$.subscribe((res:any) => {
  //     console.log("Getting Data form Api:",res);
  //   })
  // }
  getTodoList(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
    .pipe(map((todos:any) => todos.slice(0,3)))
  }
}
