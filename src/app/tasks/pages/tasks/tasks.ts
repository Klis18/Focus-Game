import { Component, computed, inject, signal } from '@angular/core';
import { TaskForm } from "../../components/task-form/task-form";
import { TasksService } from '../../services/tasks';
import { stateLevel, Task } from '../../interfaces/task.interface';
import { TaskItem } from "../../components/task-item/task-item";
import { NgClass } from '@angular/common';

@Component({
  selector: 'tasks',
  imports: [TaskForm, TaskItem, NgClass],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {

  section = signal('misiones');
  isShowMisionForm = signal(false);
  taskService = inject(TasksService);
  missionList = computed(() =>this.taskService.tasksList());


  taskState = stateLevel.pending;

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
