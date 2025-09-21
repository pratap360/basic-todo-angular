import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../interface/todo';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Todo[], filter:string): Todo[] {
    if(!tasks || filter === "All") return tasks

    if(filter === 'Active'){
      return tasks.filter(task => !task.isDone)
    }

    if(filter === 'Completed'){
      return tasks.filter(task => task.isDone)
    }

    return tasks;
  }

}
