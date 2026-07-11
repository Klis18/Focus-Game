import { Component, computed, inject, input } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { RewardsServices } from '../../../shared/services/rewards-services';

@Component({
  selector: 'shop-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styles: ``,
})
export class ProductItem {

  productData = input.required<Product>();
  rewardServices = inject(RewardsServices);
  totalCoins = computed(() => this.rewardServices.totalCoins());

  getReward(productPrice:number){
    this.rewardServices.getReward(productPrice);
  }
}
