import { HeaderModule } from './../header/header.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookDetailsPage } from './book-details.page';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  exports: [BookDetailsPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    BrowserModule,
  ],
  declarations: [BookDetailsPage],
})
export class BookDetailsPageModule {}
