import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponShopComponent } from './coupon-shop.component';
import { IonicModule } from '@ionic/angular';
import { CouponComponent } from '../coupon/coupon.component';

@NgModule({
  declarations: [CouponShopComponent],
  imports: [CommonModule, IonicModule, CouponComponent],
  exports: [CouponShopComponent],
})
export class CouponShopModule {}
