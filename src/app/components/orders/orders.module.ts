import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderModule } from '../order/order.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [OrdersComponent],
  imports: [CommonModule, OrderModule, IonicModule, FormsModule, OrderModule],
  exports: [OrdersComponent],
})
export class OrdersModule {}
