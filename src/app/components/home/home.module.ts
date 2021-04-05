import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { AccountPageModule } from '../account/account.module'
import { BookDetailsPageModule } from '../book-details/book-details.module';

import { BookItemComponent } from '../book-item/book-item.component'
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AccountPageModule,
    BookDetailsPageModule
  ],
  declarations: [HomePage, BookItemComponent]
})
export class HomePageModule {}
