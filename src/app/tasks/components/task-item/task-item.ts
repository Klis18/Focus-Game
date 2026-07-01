import { Component, input } from '@angular/core';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'task-item',
  imports: [],
  templateUrl: './task-item.html',
  styles: ``,
})
export class TaskItem {
  taskData = input<Task>()
  months: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  getDateFormated({deadline}:Task){
    return `${deadline.getDate()}/${this.months[deadline.getMonth()]}/${deadline.getFullYear()}`
  }

}
