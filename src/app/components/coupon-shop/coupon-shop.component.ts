import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Coupon } from 'src/app/interfaces/coupon';
import { Reader } from 'src/app/interfaces/reader';
import { ReaderService } from 'src/app/services/reader.service';
import { toast } from 'src/app/utilities/toast';
import { AccountPage } from '../account/account.page';

@Component({
  selector: 'app-coupon-shop',
  templateUrl: './coupon-shop.component.html',
  styleUrls: ['./coupon-shop.component.scss'],
})
export class CouponShopComponent {
  @Input() reader: Reader | undefined;
  coupons: Coupon[] | undefined;

  couponsForm = this.formBuilder.group({
    money: new FormControl(Validators.compose([Validators.required])),
    email: new FormControl('', Validators.compose([Validators.email])),
  });

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private readerService: ReaderService,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.coupons = this.reader._coupons;
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  generateCoupon() {
    if (this.couponsForm?.value.email != '') {
      const money = this.couponsForm?.value.money;
      const email = this.couponsForm?.value.email;
      this.couponsForm.controls['money'].setValue(0);
      this.couponsForm.controls['email'].setValue('');
      this.readerService.generateGift(money, email);
    } else this.readerService.generateCoupon(this.couponsForm?.value.money);
    this.router.navigate(['/books']);
    this.router.navigate(['/account']);
    toast('Token Generated!');
  }

  get updatedCoupons(): Coupon[] {
    return this.coupons;
  }
}
