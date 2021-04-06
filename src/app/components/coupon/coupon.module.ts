import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponComponent } from './coupon.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [CouponComponent],
  imports: [CommonModule, IonicModule],
  exports: [CouponComponent],
})
export class CouponModule {}
