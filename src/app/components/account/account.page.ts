import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  name: string = 'Roberta';
  surname: string = 'Corallo';
  email: string = 'roxycrl92@gmail.com';
  nationality: string = 'Italiana';
  money: number = 50;

  public data = [
    {
      field1: 'test1',
      field2: 'test2',
    },
    {
      field1: 'test1',
      field2: 'test2',
    },
    {
      field1: 'test1',
      field2: 'test2',
    },
    {
      field1: 'test1',
      field2: 'test2',
    },
    {
      field1: 'test1',
      field2: 'test2',
    },
  ];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

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
