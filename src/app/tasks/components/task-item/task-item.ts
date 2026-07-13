import { Component, inject, input } from '@angular/core';
import { Task } from '../../interfaces/task.interface';
import { NgClass } from '@angular/common';
import { TasksService } from '../../services/tasks';

@Component({
  selector: 'task-item',
  imports: [
    NgClass
  ],
  templateUrl: './task-item.html',
  styles: ``,
})
export class TaskItem {
  taskData = input.required<Task>()
  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  taskService = inject(TasksService);

  getDateFormated({deadline}:Task){
    const date = new Date(deadline);
    return `${date.getDate()}/${this.months[date.getMonth()]}/${date.getFullYear()}`
  }

  completeMision(taskId:string){
    this.taskService.updateTask(taskId);
  }

}
