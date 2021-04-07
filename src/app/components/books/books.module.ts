import { BookItemModule } from './../book-item/book-item.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksPageRoutingModule } from './books-routing.module';

import { BooksPage } from './books.page';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksPageRoutingModule,
    BookItemModule,
    HeaderModule,
  ],
  declarations: [BooksPage],
})
export class BooksPageModule {}
