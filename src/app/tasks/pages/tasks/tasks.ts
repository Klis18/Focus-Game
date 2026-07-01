import { Component, inject, signal } from '@angular/core';
import { TaskForm } from "../../components/task-form/task-form";
import { TasksService } from '../../services/tasks';
import { Task } from '../../interfaces/task.interface';
import { TaskItem } from "../../components/task-item/task-item";

@Component({
  selector: 'tasks',
  imports: [TaskForm, TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  section = signal('misiones');
  isShowMisionForm = signal(false);
  taskService = inject(TasksService);
  missionList: Task[] = this.taskService.getTasks();

  changeSection(){
    this.section.update((sectionName) =>
      sectionName == 'misiones'? 'tienda':'misiones'
     )
  }

  showMisionForm(){
    this.isShowMisionForm.update((isVisible) =>
      isVisible == false ? true : false
    )
  }

}
