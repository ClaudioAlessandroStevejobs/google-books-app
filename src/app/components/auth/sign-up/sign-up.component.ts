import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: [
    './sign-up.component.scss',
    '../auth-container/auth-container.page.scss',
  ],
})
export class SignUpComponent implements OnInit {
  role = 'READER';
  nations = ['Italy', 'France', 'Germany', 'England'];
  email: string;
  password: string;
  confirmPassword: string;
  selectedNation = this.nations[0];

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {}

  async submit() {
    try {
      await this.authService.register(
        this.email,
        this.password,
        this.selectedNation,
        this.role
      );

      alert('Your account has been registered');

      // qui non ci arriva, bisognerebbe catchare l'errore nel servizio nella funzione(),
      // controllarsi lo status della call e non dare mai errore qui.
    } catch (err) {
      throw new Error(err);
    }
  }
}
