import { effect, inject, Injectable, signal} from '@angular/core';
import { stateLevel, Task } from '../interfaces/task.interface';
import { RewardsServices } from '../../shared/services/rewards-services';

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  tasksList = signal<Task[]>(JSON.parse(localStorage.getItem('Missions') ?? '[]'));
  rewardServices = inject(RewardsServices);

  constructor(){
    effect(() =>{
       localStorage.setItem('Missions', JSON.stringify(this.tasksList()));
    });
  }

  addTask(newTask: Task){
    this.tasksList.update((tasks) =>
      [...tasks, newTask],
    );
  }

  updateTask(id: string){
    const task = this.tasksList().find((tasks) => tasks.id == id);

    if (!task) return;

    if(task.state == stateLevel.ready) return;

    this.rewardServices.addReward(task.difficult);


    this.tasksList.update((tasks) =>
      tasks.map(task => 
        task.id === id 
        ?{...task, state:stateLevel.ready}
        :task
    ))
  }

  deleteMissions(){
    localStorage.removeItem('Missions');
  }
  
}
