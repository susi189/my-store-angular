import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/models/Product';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private router: Router, private order: OrderService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1,
    };
  }

  ngOnInit(): void {}

  getProductDetails(product: Product) {
    console.log(product);
    const pid = product.id.toString();
    this.router.navigate(['/product'], { queryParams: { id: pid } });
  }

  addItemToCart(product: Product): void {
    this.order.addItemToCart(product);
    alert(`You added ${product.name} to your cart`);
  }
}
