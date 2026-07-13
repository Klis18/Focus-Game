import { Injectable, signal } from '@angular/core';
import { Reward } from '../interfaces/rewards.interfaces';
import { difficultLevel } from '../../tasks/interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class RewardsServices {

  gameLevel       = signal<number>(1);
  totalCoins      = signal<number>(0);
  totalExperience = signal<number>(0);

  rewards:Reward[]=[
    {
      id: 'r1',
      taskDifficult: difficultLevel.low,
      coins: 10,
      experience: 5
    },
    {
      id: 'r2',
      taskDifficult: difficultLevel.midd,
      coins: 15,
      experience: 10
    },
    {
      id: 'r3',
      taskDifficult: difficultLevel.hard,
      coins: 20,
      experience: 25
    }
  ]


  addReward(taskDifficultLevel:difficultLevel){
    const [{coins, experience}] = this.rewards.filter((reward) =>
      reward.taskDifficult == taskDifficultLevel
    );
    this.totalCoins.update((actualCoins) => actualCoins += coins);
    this.totalExperience.update((actualXP) => actualXP += experience);
    this.upLevel();
  }

  upLevel(){
    if(this.totalExperience() <100) return;

    this.gameLevel.update((actualLevel)=> actualLevel+=1);
    this.totalExperience.update((actualXP) => actualXP = 0);
  }

  getReward(productPrice:number){
    this.totalCoins.update((actualCoins) => actualCoins-=productPrice);
  }
  
}
