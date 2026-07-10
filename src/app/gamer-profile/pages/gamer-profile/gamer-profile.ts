import { Component, computed, inject } from '@angular/core';
import { RewardsServices } from '../../../shared/services/rewards-services';

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
}
