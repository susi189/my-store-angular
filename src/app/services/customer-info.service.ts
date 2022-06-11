import { Injectable } from '@angular/core';
import { Customer } from 'src/models/Customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerInfoService {
  customers: Customer[] = [];
  constructor() {}

  createCustomer(customer: Customer) {
    this.customers.unshift(customer);
  }

  getCustomerInfo() {
    return this.customers[0];
  }
}
