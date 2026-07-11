import { Component } from '@angular/core';
import { ProductList } from "../../components/product-list/product-list";

@Component({
  selector: 'shop',
  imports: [ProductList],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {

}
