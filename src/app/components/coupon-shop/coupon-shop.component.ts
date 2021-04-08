import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Coupon } from 'src/app/interfaces/coupon';
import { Reader } from 'src/app/interfaces/reader';

@Component({
  selector: 'app-coupon-shop',
  templateUrl: './coupon-shop.component.html',
  styleUrls: ['./coupon-shop.component.scss'],
})
export class CouponShopComponent implements OnInit {
  @Input() reader: Reader | undefined;
  coupons: Coupon[] | undefined;
  // get couponEmail() {
  // return this.logForm.get('email');
  // }
  get couponMoney() {
    return 'money';
  }

  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    this.reader = changes.reader.currentValue;
    this.coupons = this.reader?._coupons;
  }
}
