import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/models/Product';
import { ProductService } from '../services/product.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = [];
  product: Product;
  id: number;

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
    this.order.addItemToCart(product);
    alert(`${product.name} was added to your cart`);
  }
}
