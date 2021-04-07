import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsightsComponent } from './insights.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InsightsRoutingModule } from '../insights/insights-routing.module';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [InsightsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsightsRoutingModule,
    HeaderModule,
  ]
})
export class InsightsModule { }
