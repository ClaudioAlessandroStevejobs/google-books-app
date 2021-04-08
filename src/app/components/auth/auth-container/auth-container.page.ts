import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.page.html',
  styleUrls: ['./auth-container.page.scss'],
})
export class AuthContainerPage {
  formMode: 'SIGN-UP' | 'SIGN-IN' = 'SIGN-IN';
  changeButtonLabel: 'SIGN-UP FOR FREE' | 'SIGN-IN NOW' = 'SIGN-UP FOR FREE';

  formModeChange = () => {
    this.formMode = this.formMode == 'SIGN-UP' ? 'SIGN-IN' : 'SIGN-UP';
    this.changeButtonLabel =
      this.changeButtonLabel == 'SIGN-IN NOW'
        ? 'SIGN-UP FOR FREE'
        : 'SIGN-IN NOW';
  };
}
