import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [
    './sign-in.component.scss',
    '../auth-container/auth-container.page.scss',
  ],
})
export class SignInComponent implements OnInit {
  role = 'READER';
  response = {
    id: '',
    token: '',
  };
  email: string;
  password: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  async submit(): Promise<void> {
    try {
      const loginResponse = await this.authService.login(
        this.email,
        this.password,
        this.role
      );
      if (!loginResponse) return;
      const { id, token } = loginResponse;
      // qui non ci arriva, bisognerebbe catchare l'errore nel servizio nella funzione(),
      // controllarsi lo status della call e non dare mai errore qui.
      const inventory = [] as string[];
      localStorage.setItem('inventory', JSON.stringify(inventory));
      localStorage.setItem('id', id);
      localStorage.setItem('token', token);
      localStorage.setItem('role', this.role);
      console.log(this.role);
      this.router.navigate(['/home']);
    } catch (err) {
      throw new Error(err);
    }
  }

  ngOnInit() {}
}
