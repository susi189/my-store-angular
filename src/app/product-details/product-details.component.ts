import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  products: Product[] = [];
  product: Product;

  constructor(private productService: ProductService) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
      quantity: 1,
    };
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.product = res[0];
    });
  }

  addItemToCart(product: Product): void {
    alert('added item to cart');
  }
}
