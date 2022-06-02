import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from 'src/models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private router: Router) {
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

  addItemToCart(product: Product): void {
    alert('added item to cart');
  }

  getProductDetails(product: Product) {
    console.log(product);
    const pid = product.id.toString();
    this.router.navigate(['/product'], { queryParams: { id: pid } });
  }
}
