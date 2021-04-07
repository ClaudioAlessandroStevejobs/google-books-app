import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { AccountPageModule } from '../account/account.module';
import { IonicModule } from '@ionic/angular';
import { BookItemModule } from '../book-item/book-item.module';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AccountPageModule,
    BookItemModule,
    HeaderModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
