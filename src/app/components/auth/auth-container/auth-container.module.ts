import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthContainerPage } from './auth-container.page';
import { RouterModule } from '@angular/router';
import { SignInModule } from '../sign-in/sign-in.module';
import { SignUpModule } from '../sign-up/sign-up.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: AuthContainerPage }]),
    SignInModule,
    SignUpModule,
  ],
  declarations: [AuthContainerPage],
  exports: [AuthContainerPage],
})
export class AuthContainerPageModule {}
