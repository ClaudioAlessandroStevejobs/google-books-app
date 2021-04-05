import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  // get couponEmail() {
  // return this.logForm.get('email');
  // }
  get couponMoney() {
    return 'money';
  }

  constructor() {}

  ngOnInit() {}

  /*
  export class FormsPage {
  todo = {}
  logForm() {
    console.log(this.todo)
  }
  */
}
