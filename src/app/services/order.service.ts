import { Injectable } from '@angular/core';
import { Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  items: Product[] = [];
  constructor() {}

  addItemToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
