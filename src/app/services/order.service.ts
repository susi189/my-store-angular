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

  checkItems(product: Product): boolean | undefined {
    if (this.items.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === product.id) {
          return true;
        }
      }
    }
    return false;
  }

  getQuantity(product: Product) {
    return product.quantity;
  }

  getTotal(): number | undefined {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum = sum + this.items[i].quantity * this.items[i].price;
    }
    return sum;
  }

  removeItem(product: Product): void {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === product.id) {
        this.items.splice(i, 1);
      }
    }
  }
}
