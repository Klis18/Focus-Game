import { Component, computed, inject } from '@angular/core';
import { RewardsServices } from '../../../shared/services/rewards-services';
import { TasksService } from '../../../tasks/services/tasks';
import { stateLevel } from '../../../tasks/interfaces/task.interface';

@Component({
  selector: 'gamer-profile',
  imports: [],
  templateUrl: './gamer-profile.html',
  styleUrl: './gamer-profile.css',
})
export class GamerProfile {

  rewardsServices = inject(RewardsServices);
  totalCoins      = computed(() => this.rewardsServices.totalCoins());
  totalXP         = computed(() => this.rewardsServices.totalExperience());
  level           = computed(() => this.rewardsServices.gameLevel());
  tasksServices = inject(TasksService);
  totalWeekTasks = computed(() => this.tasksServices.tasksList().length);
  weekCompletedTasks = computed(() => this.tasksServices.tasksList().filter((tasks) => tasks.state == stateLevel.ready).length);
  weekPendingTasks = computed(() => this.tasksServices.tasksList().filter((tasks) => tasks.state == stateLevel.pending).length);

}
