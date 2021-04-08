import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouponShopComponent } from './coupon-shop.component';
import { IonicModule } from '@ionic/angular';
import { CouponModule } from '../coupon/coupon.module';
import { HeaderModule } from '../header/header.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CouponShopComponent],
  imports: [
    CommonModule,
    IonicModule,
    CouponModule,
    HeaderModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CouponShopComponent],
})
export class CouponShopModule {}
