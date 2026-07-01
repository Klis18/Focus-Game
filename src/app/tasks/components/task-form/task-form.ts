import { Component, inject } from '@angular/core';
import { difficultLevel, Task, stateLevel } from '../../interfaces/task.interface';
import { DatepickerComponent } from "../../../shared/components/datepicker/datepicker";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {v4 as uuidv4} from "uuid"
import { TasksService } from '../../services/tasks';

@Component({
  selector: 'task-form',
  imports: [
    DatepickerComponent,
    ReactiveFormsModule
  ],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
})
export class TaskForm {

  difficult: string[]= [difficultLevel.low, difficultLevel.midd, difficultLevel.hard];
  
  taskForm!: FormGroup;
  deadlineSelected?: Date;
  taskServices = inject(TasksService);

  constructor(private fb:FormBuilder,){
    this.taskForm = this.fb.group({
      description:['', Validators.required],
      difficult:['']
    })
  }

  getSelectedDate(selectedDate:Date){
    this.deadlineSelected = selectedDate;
  }

  saveTask(){
    if(!this.taskForm.valid) return;
    const task: Task = {
      ...this.taskForm.value,
      id: uuidv4(),
      state: stateLevel.pending,
      deadline: this.deadlineSelected
    }
    this.taskServices.addTask(task);
    this.clearForm();
  }

  clearForm(){
    this.taskForm.controls['description'].setValue('');
    this.taskForm.controls['difficult'].setValue('');
    
  }

}
