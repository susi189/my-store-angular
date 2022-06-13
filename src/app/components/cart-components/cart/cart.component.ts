import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.order.getItems();
  total: number | undefined = this.order.getTotal();
  quantity: number;

  constructor(private order: OrderService) {
    this.quantity = 1;
  }

  ngOnInit(): void {}

  updateQuantity(product: Product) {
    this.quantity = product.quantity;
    this.total = this.order.getTotal();
    this.total?.toFixed(2);
  }

  removeItemInCart(product: Product): void {
    this.order.removeItem(product);
    this.items = this.order.getItems();
    this.total = this.order.getTotal();
    alert(`You removed ${product.name} from your cart`);
  }
}
