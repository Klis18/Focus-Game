import { computed, Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ShopServices {
  
  productList:Product[] = [
    {
      id: uuidv4(),
      description: '20 Minutos de Descanso',
      price: 25,
      image: 'images/time-break.png'
    },
    {
      id: uuidv4(),
      description: 'Ver video de Youtube',
      price: 50,
      image: 'images/watch-video.png'
    },
    {
      id: uuidv4(),
      description: '1 Hora de Descanso',
      price: 75,
      image: 'images/time-break.png'
    },
    {
      id: uuidv4(),
      description: 'Tarde libre',
      price: 120,
      image: 'images/time-break.png'
    },
    {
      id: uuidv4(),
      description: '1 Día libre',
      price: 250,
      image: 'images/free-day.png'
    }
  ];

  getProductList(){
    return computed(() => this.productList);
  }
}
