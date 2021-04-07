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
<<<<<<< HEAD
    BookItemModule,
    HeaderModule,
=======
    BookItemModule
>>>>>>> 3e0e1814b57cc6e2d6d5ff69f5d327efc16de345
  ],
  declarations: [BooksPage],
})
export class BooksPageModule {}
