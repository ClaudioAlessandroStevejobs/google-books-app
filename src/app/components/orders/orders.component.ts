import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Order } from 'src/app/interfaces/order';
import { Reader } from 'src/app/interfaces/reader';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnChanges {
  @Input() reader: Reader | undefined;
  orders: Order[] | undefined;

  ngOnChanges(changes: SimpleChanges) {
    this.orders = this.reader?._orders;
  }

  constructor(private modalController: ModalController) {}

  ionViewWillEnter() {
    this.orders = this.reader?._orders;
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}
