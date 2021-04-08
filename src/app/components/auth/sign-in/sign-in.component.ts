import { Component } from '@angular/core';
import {
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { toast } from 'src/app/utilities/toast';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: [
    './sign-in.component.scss',
    '../auth-container/auth-container.page.scss',
  ],
})
export class SignInComponent{
  response = {
    id: '',
    token: '',
  };

  signInForm = this.formBuilder.group({
    password: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(8)])
    ),
    email: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])
    ),
    role: new FormControl('READER', Validators.compose([Validators.required])),
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  async onSubmit(): Promise<void> {
    try {
      const loginResponse = await this.authService.login(
        this.signInForm.value.email,
        this.signInForm.value.password,
        this.signInForm.value.role
      );
      if (!loginResponse) return;
      toast('Successfully logged in');
      const { id, token } = loginResponse;

      const inventory = [] as string[];
      localStorage.setItem('inventory', JSON.stringify(inventory));
      localStorage.setItem('id', id);
      localStorage.setItem('token', token);
      localStorage.setItem('role', this.signInForm.value.role);
      this.router.navigate(['/home']);
    } catch (err) {
      throw new Error(err);
    }
  }

  changeRole = (role: 'READER' | 'WRITER') => {
    this.signInForm.controls.role.setValue(role);
  };

  hasPasswordErrors = () => 
    !this.signInForm.controls['password'].untouched &&
      !this.signInForm.controls['password'].pristine &&
          (
            this.signInForm.hasError('required', 'password') ||
            this.signInForm.value.password.length < 8
          )

  hasEmailErrors = () => 
    !this.signInForm.controls['email'].untouched && 
      !this.signInForm.controls['email'].pristine &&
          (
            this.signInForm.hasError('required', 'email') ||
            this.signInForm.hasError('email', 'email')
          )
}
