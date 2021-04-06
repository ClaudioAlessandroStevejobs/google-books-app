import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
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

  signUpForm = this.formBuilder.group({
    password: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(8)])
    ),
    confirmPassword: new FormControl(
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
    selectedNation: new FormControl(
      'Italy',
      Validators.compose([Validators.required])
    ),
  });

  changeRole = (role: 'READER' | 'WRITER') => {
    this.signUpForm.controls['role'].setValue(role);
  };

  changeNation = (selectedNation: string) => {
    this.signUpForm.controls['selectedNation'].setValue(selectedNation);
  };

  arePasswordsSame = (): boolean =>
    this.signUpForm.value.password === this.signUpForm.value.confirmPassword;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  hasPasswordErrors = () => {
    if (!this.signUpForm.controls['password'].untouched)
      if (!this.signUpForm.controls['password'].pristine)
        return (
          this.signUpForm.hasError('required', 'password') ||
          this.signUpForm.value.password.length < 8
        );
  };

  hasConfirmPasswordErrors = () => {
    if (!this.signUpForm.controls['confirmPassword'].untouched)
      if (!this.signUpForm.controls['confirmPassword'].pristine)
        return (
          this.signUpForm.hasError('required', 'confirmPassword') ||
          !this.arePasswordsSame() ||
          this.signUpForm.value.password.length < 8
        );
  };

  hasEmailErrors = () => {
    if (!this.signUpForm.controls['email'].untouched)
      if (!this.signUpForm.controls['email'].pristine)
        return (
          this.signUpForm.hasError('required', 'email') ||
          this.signUpForm.hasError('email', 'email')
        );
  };

  ngOnInit(): void {}

  async onSubmit() {
    try {
      await this.authService.register(
        this.signUpForm.value.email,
        this.signUpForm.value.password,
        this.signUpForm.value.selectedNation,
        this.signUpForm.value.role
      );

      alert(this.signUpForm.value.selectedNation);

      // qui non ci arriva, bisognerebbe catchare l'errore nel servizio nella funzione(),
      // controllarsi lo status della call e non dare mai errore qui.
    } catch (err) {
      throw new Error(err);
    }
  }
}
