import { LocalStorage } from '../../services/local-storage/local-storage';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todos',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './create-todos.html',
  styleUrl: './create-todos.css'
})
export class CreateTodos implements OnInit {
  tasks: string[] = [];
  completedTasks: string[] = [];
  task!:FormGroup

  constructor(
    private fb: FormBuilder,
    private localStorage : LocalStorage
  ){
    this.task = this.fb.group({
      addtask:['',Validators.required],
    })
  }

  ngOnInit(){
    this.tasks = this.localStorage.getTasks() || []
  }

  addTasks(){
    let taskName = this.task.get('addtask')?.value
    if(taskName){
      this.tasks.push(taskName)
      this.localStorage.setTasks(this.tasks)
      this.task.reset()
    }
    console.log(this.tasks)
  }
}
