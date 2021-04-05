import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { AccountPageModule } from '../components/account/account.module';
import { BookDetailsPageModule } from '../components/book-details/book-details.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    AccountPageModule,
    BookDetailsPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
