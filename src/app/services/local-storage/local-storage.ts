import { Injectable } from '@angular/core';
import { Todo } from '../../interface/todo';


@Injectable({
  providedIn: 'root'
})
export class LocalStorage {
  constructor() { }

  setTasksApi(tasks: string[]): void {
    localStorage.setItem("API tasks", JSON.stringify(tasks));
  }
  setTasks(tasks: Todo[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  getTasks(): Todo[] {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  }
  deleteTasks(id: string){
    localStorage.removeItem(id)
  }
  //  deleteTodos(): void {
  //   localStorage.removeItem("todos");
  // }
}
