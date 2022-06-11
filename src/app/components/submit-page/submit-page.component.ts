import { Component, Input, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Customer } from 'src/models/Customer';
import { CustomerInfoService } from 'src/app/services/customer-info.service';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css'],
})
export class SubmitPageComponent implements OnInit {
  total = this.order.getTotal();
  customer = this.customerInfo.getCustomerInfo();

  constructor(
    private order: OrderService,
    private customerInfo: CustomerInfoService
  ) {}

  ngOnInit(): void {}
}
