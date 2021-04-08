import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reader } from 'src/app/interfaces/reader';
import { Writer } from 'src/app/interfaces/writer';
import { AuthService } from 'src/app/services/auth.service';
import { ReaderService } from 'src/app/services/reader.service';
import { WriterService } from 'src/app/services/writer.service';
import { toast } from 'src/app/utilities/toast';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  updatedFund: number;
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
    money: new FormControl(0, Validators.required),
  });

  constructor(
    private router: Router,
    private authService: AuthService,
    private writerService: WriterService,
    private readerService: ReaderService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      ({
        WRITER: async () => {
          this.user = await this.writerService.getWriter();
          this.updatedFund = this.user._fund;
        },
        READER: async () => {
          this.user = await this.readerService.getReader();
          this.updatedFund = this.user._fund;
        },
      }[localStorage.getItem('role')]());
    }
  }

  ionViewDidEnter() {
    !localStorage.getItem('role') &&
      this.router.navigate(['logged-out'])
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
    toast('Logout')
  }

  refill(): void {
    this.readerService.refill(this.refillForm.value.money);
    this.updatedFund += this.refillForm.value.money;
    this.refillForm.controls['money'].setValue(0);
  }
}
