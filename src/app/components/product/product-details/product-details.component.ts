import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/models/Product';
import { ProductService } from '../../../services/product.service';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product;
  quantity: number;
  id: number;
  inCart: boolean = false;

  @Output() addedToCart = new EventEmitter<boolean>();

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private order: OrderService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1,
    };
    this.id = 0;
    this.quantity = 1;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      let pid = params['id'];
      this.id = parseInt(pid);
    });
    this.productService.getProducts().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i].id === this.id) {
          this.product = res[i];
        }
      }
    });
  }

  addItemToCart(product: Product): void {
    if (!this.order.checkItems(product)) {
      product.quantity = this.quantity;
      this.order.addItemToCart(product);
      alert(`You added ${product.name} to your cart`);
    } else {
      alert('Item already in cart');
    }
  }
}
