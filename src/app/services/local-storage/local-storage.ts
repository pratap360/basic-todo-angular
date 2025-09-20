import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorage {
  constructor() { }
  setTasks(tasks: string[]): void {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  getTasks(): string[] {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  }
  deleteTasks(id: string){
    localStorage.removeItem(id)
  }
}
