import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsightsComponent } from './insights.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InsightsRoutingModule } from '../insights/insights-routing.module';



@NgModule({
  declarations: [InsightsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsightsRoutingModule
  ]
})
export class InsightsModule { }
