import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-shop',
  templateUrl: './coupon-shop.component.html',
  styleUrls: ['./coupon-shop.component.scss'],
})
export class CouponShopComponent implements OnInit {
  // get couponEmail() {
  // return this.logForm.get('email');
  // }
  get couponMoney() {
    return 'money';
  }

  constructor() {}

  ngOnInit() {}

  
  
}
