import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SignUpComponent],
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule],
  exports: [SignUpComponent],
})
export class SignUpModule {}
