import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponShopComponent } from './coupon-shop.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CouponShopComponent],
  imports: [CommonModule, IonicModule],
  exports: [CouponShopComponent],
})
export class CouponShopModule {}
