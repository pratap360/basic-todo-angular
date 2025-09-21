import { TodoService } from './../../services/todo-service/todo-service';
import { LocalStorage } from '../../services/local-storage/local-storage';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Todo } from '../../interface/todo';

@Component({
  selector: 'app-create-todos',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-todos.html',
  styleUrl: './create-todos.css',
})
export class CreateTodos implements OnInit {
  tasks: Todo[] = [];
  // completedTasks: string[] = [];
  private nextId = 1;
  task!: FormGroup;

  constructor(
    private fb: FormBuilder,
    // private localStorage : LocalStorage
    private todoService: TodoService
  ) {
    this.task = this.fb.group({
      addtask: ['', Validators.required],
    });
  }

  ngOnInit() {
    // this.tasks = this.localStorage.getTasks() || []
    this.todoService.todos$.subscribe(todos => {
      this.nextId = todos.length > 0 ? Math.max(...todos.map(t => t.todoId)) + 1 : 1;
    });
  }


  addTasks() {
    let taskName = this.task.get('addtask')?.value;
    if (taskName) {
      const newTask: Todo = {
        todoId: this.nextId++,
        todoName: taskName,
        isDone: false,
      };
      this.todoService.addTodo(newTask)
      // this.tasks.push(newTask)
      // this.localStorage.setTasks(this.tasks)
      this.task.reset();
    }
    console.log(this.tasks);
  }
}
