import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from 'src/models/Product';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: number;
  inCart: boolean = false;

  @Output() addedToCart = new EventEmitter<boolean>();

  constructor(private router: Router, private order: OrderService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1,
    };

    this.quantity = 1;
  }

  ngOnInit(): void {}

  getProductDetails(product: Product) {
    const pid = product.id.toString();
    this.router.navigate(['/product'], { queryParams: { id: pid } });
  }

  addItemToCart(product: Product): void {
    if (!this.order.checkItems(product)) {
      product.quantity = this.quantity;
      this.order.addItemToCart(product);
      this.inCart = true;
    } else {
      this.inCart = false;
    }
    this.addedToCart.emit(this.inCart);
  }
}
