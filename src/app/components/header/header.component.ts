import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent{
  @Input() tabName: string;
  constructor(private router: Router) {}
  redirectToHome = () => {
    this.router.navigate(['/home']);
  };
}
