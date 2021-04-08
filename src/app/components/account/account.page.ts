import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reader } from 'src/app/interfaces/reader';
import { Writer } from 'src/app/interfaces/writer';
import { AuthService } from 'src/app/services/auth.service';
import { ReaderService } from 'src/app/services/reader.service';
import { WriterService } from 'src/app/services/writer.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
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
  constructor(
    private router: Router,
    private authService: AuthService,
    private writerService: WriterService,
    private readerService: ReaderService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      ({
        WRITER: async () => {
          this.user = await this.writerService.getWriter();
        },
        READER: async () => {
          this.user = await this.readerService.getReader();
        },
      }[localStorage.getItem('role')]());
    }
    console.log(this.user);
  }

  ionViewDidEnter() {
    if (!localStorage.getItem('role')) {
      this.router.navigate(['logged-out']);
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/home']);
  }
}
