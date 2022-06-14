import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

import { Customer } from 'src/models/Customer';
import { CustomerInfoService } from 'src/app/services/customer-info.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  customer: Customer;
  disabled: boolean = true;

  constructor(
    private router: Router,

    private customerInfo: CustomerInfoService
  ) {
    this.customer = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
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
