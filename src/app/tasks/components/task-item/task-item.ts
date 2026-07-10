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
    return `${deadline.getDate()}/${this.months[deadline.getMonth()]}/${deadline.getFullYear()}`
  }

  completeMision(taskId:string){
    this.taskService.updateTask(taskId);
  }

}
