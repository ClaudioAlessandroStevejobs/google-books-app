import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookDetailsPage } from './book-details.page';

@NgModule({
  exports:[BookDetailsPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  
  ],
  declarations: [BookDetailsPage]
})
export class BookDetailsPageModule {}
