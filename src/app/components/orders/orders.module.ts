import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderModule } from '../order/order.module';

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, OrderModule],
  exports: [OrdersComponent],
})
export class OrdersModule {}
