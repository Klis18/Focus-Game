import { Injectable } from '@angular/core';
import { stateLevel, Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  tasksList: Task[] = []

  getTasks(){
    return this.tasksList;
  }

  addTask(task: Task){
    this.tasksList.push(task);
    console.log('Tarea Agregada:', this.tasksList)
  }

  updateTask(id: string){
    this.tasksList.filter((task) => 
    {
      if(task.id == id){
        task.state = stateLevel.ready
      }
      else{
        console.log('Tarea no encontrada')
      }
    }
  );

  }
  
}
