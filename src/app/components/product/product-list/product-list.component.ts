import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        const product = res[i];
        product['quantity'] = 1;
      }
      this.products = res;
    });
  }

  addedToCartAlert($event: boolean, product: Product): void {
    if ($event) {
      alert(`You added ${product.name} to your cart`);
    } else {
      alert('Item already in cart');
    }
  }
}
