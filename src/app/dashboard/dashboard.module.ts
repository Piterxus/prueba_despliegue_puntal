import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardconchartComponent } from './cardconchart/cardconchart.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Chart2Component } from './chart2/chart2.component';
import { Card2Component } from './card2/card2.component';
import { Cardconchart2Component } from './cardconchart2/cardconchart2.component';
import { Chart3Component } from './chart3/chart3.component';
import { Cardconchart3Component } from './cardconchart3/cardconchart3.component';
import { Chart4Component } from './chart4/chart4.component';





@NgModule({
  declarations: [
    CardComponent,
    CardconchartComponent,
    ChartComponent,
    DashboardComponent,
    Chart2Component,
    Card2Component,
    Cardconchart2Component,
    Chart3Component,
    Cardconchart3Component,
    Chart4Component,

  ],
  imports: [
    CommonModule
  ],
  exports:[DashboardComponent

  ]
})
export class DashboardModule { }
