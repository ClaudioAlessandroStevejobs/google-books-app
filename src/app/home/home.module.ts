import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ItemModule } from '../component/item/item.module';
import { ItemComponent } from '../component/item/item.component';
import { CouponModule } from '../coupon/coupon/coupon.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ItemModule,
    CouponModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
