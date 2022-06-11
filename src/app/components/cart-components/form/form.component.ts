import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/models/Customer';
import { CustomerInfoService } from 'src/app/services/customer-info.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  customer: Customer;
  constructor(
    private router: Router,
    private customerInfo: CustomerInfoService
  ) {
    this.customer = {
      name: '',
      address: '',
      inputCity: '',
      inputState: '',
      inputZip: '',
      cardNumber: '',
      expDate: '',
      cvv: '',
    };
  }

  ngOnInit(): void {}

  submitOrder(customer: Customer) {
    this.customerInfo.createCustomer(customer);
    this.router.navigate(['/submit']);
  }
}
