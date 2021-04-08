import { Component } from '@angular/core';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  role = (): 'READER' | 'WRITER' =>
    localStorage.getItem('role') as 'READER' | 'WRITER';

  inventorySize = () => JSON.parse(localStorage.getItem('inventory')).length;
}
