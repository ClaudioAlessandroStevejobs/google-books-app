import { BookDetailRoutingModule } from './book-detail-routing.module';
import { HeaderModule } from './../header/header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookDetailsPage } from './book-details.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, BookDetailRoutingModule ,HeaderModule,],
  declarations: [BookDetailsPage],
})
export class BookDetailsPageModule { }
