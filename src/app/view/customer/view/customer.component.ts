import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  displayedCustomerColumns: string[] = ['id', 'name', 'address','tel','salary'];
  constructor() { }

  ngOnInit(): void {
  }

}
