import { toast } from 'src/app/utilities/toast';
import { Component, Input, OnInit } from '@angular/core';
import { Coupon } from 'src/app/interfaces/coupon';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent implements OnInit {
  @Input() coupon: Coupon;
  constructor() {}

  ngOnInit() {}

  copyCode(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    toast('Copied to clipboard!');
  }
}
