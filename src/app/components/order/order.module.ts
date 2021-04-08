import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { IonicModule } from '@ionic/angular';
import { BookItemModule } from '../book-item/book-item.module';

@NgModule({
  declarations: [OrderComponent],
  imports: [CommonModule, IonicModule, BookItemModule],
  exports: [OrderComponent],
})
export class OrderModule {}
