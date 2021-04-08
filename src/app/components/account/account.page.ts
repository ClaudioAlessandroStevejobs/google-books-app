import { Component, ElementRef, ViewChild } from '@angular/core';
import { OrdersComponent } from './../orders/orders.component';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Reader } from 'src/app/interfaces/reader';
import { Writer } from 'src/app/interfaces/writer';
import { AuthService } from 'src/app/services/auth.service';
import { ReaderService } from 'src/app/services/reader.service';
import { WriterService } from 'src/app/services/writer.service';
import { toast } from 'src/app/utilities/toast';
import { CouponShopComponent } from '../coupon-shop/coupon-shop.component';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage{
  updatedFund: number;
  @ViewChild('avatarCanvas') avatarCanvas: ElementRef;
  user: Reader | Writer = {
    _email: '',
    _password: '',
    _nationality: '',
    _fund: 0,
    _booksIds: [],
    _orders: [],
    _coupons: [],
    _id: '',
  };

  refillForm = this.formBuilder.group({
    money: new FormControl(Validators.required),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private writerService: WriterService,
    private readerService: ReaderService,
    private formBuilder: FormBuilder,
    private modalController: ModalController
  ) {}
  
  _CANVAS: any;
  _CONTEXT: any;

  role = () => localStorage.getItem('role');
  isRefillFromInvalid = () => 
    this.refillForm.controls['money'].pristine || this.refillForm.controls['money'].value < 1
  ionViewDidEnter() {
    console.log("sono l'account");
    !localStorage.getItem('role') &&
      this.router.navigate(['logged-out'])
    if (localStorage.getItem('token')) {
      ({
        WRITER: async () => {
          this.user = await this.writerService.getWriter();
          this.updatedFund = this.user._fund;
          this.drawCanv();
        },
        READER: async () => {
          this.user = await this.readerService.getReader();
          this.updatedFund = this.user._fund;
          this.drawCanv();
        },
      }[localStorage.getItem('role')]());
    }
  }

  drawCanv() {
    this._CANVAS = this.avatarCanvas.nativeElement;
    this._CANVAS.width = 60;
    this._CANVAS.height = 60;
    this._CONTEXT = this._CANVAS.getContext("2d");
    this._CONTEXT.beginPath();
    this._CONTEXT.fillStyle = "#3880ff";
    this._CONTEXT.strokeStyle = "black";
    this._CONTEXT.font = "35px Arial";
    this._CONTEXT.lineWidth = 2;
    this._CONTEXT.arc(this._CANVAS.width/2, this._CANVAS.height/2, 30, 0, 2 * Math.PI);
    this._CONTEXT.fill();
    this._CONTEXT.beginPath();
    this._CONTEXT.fillStyle = "white";
    this._CONTEXT.fillText(this.user._email.charAt(0).toUpperCase(), 19, 43);
    this._CONTEXT.fill();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
    toast('Logout');
  }

  refill(): void {
    this.readerService.refill(this.refillForm.value.money);
    this.updatedFund += this.refillForm.value.money;
    this.refillForm.controls['money'].setValue(0);
  }

  async couponsModal() {
    const modal = await this.modalController.create({
      component: CouponShopComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async ordersModal() {
    const modal = await this.modalController.create({
      component: OrdersComponent,
      cssClass: 'my-custom-class',
      componentProps: {
        reader: this.user,
      },
    });
    return await modal.present();
  }
}
