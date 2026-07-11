import { Component, inject } from '@angular/core';
import { ShopServices } from '../../services/shop-services';
import { ProductItem } from "../product-item/product-item";

@Component({
  selector: 'shop-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styles: ``,
})
export class ProductList {

  shopServices = inject(ShopServices);
  productList = this.shopServices.getProductList();

}
