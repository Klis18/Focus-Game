import { inject, Injectable } from '@angular/core';
import { stateLevel, Task } from '../interfaces/task.interface';
import { RewardsServices } from '../../shared/services/rewards-services';

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  tasksList: Task[] = []
  rewardServices = inject(RewardsServices);

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
        this.rewardServices.addReward(task.difficult);
      }
      else{
        console.log('Tarea no encontrada')
      }
    }
  );

  }
  
}
