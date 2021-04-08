import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Order } from 'src/app/interfaces/order';
import { Reader } from 'src/app/interfaces/reader';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  @Input() reader: Reader | undefined;
  orders: Order[] | undefined;
  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    this.reader = changes.reader.currentValue;
    this.orders = this.reader?._orders;
  }
}
