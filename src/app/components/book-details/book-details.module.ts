import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookDetailsPage } from './book-details.page';

@NgModule({
  imports: [FormsModule, IonicModule, CommonModule],
  declarations: [BookDetailsPage],
})
export class BookDetailsPageModule {}
