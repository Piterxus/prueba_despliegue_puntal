import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardconchartComponent } from './cardconchart/cardconchart.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Chart2Component } from './chart2/chart2.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [
    CardComponent,
    CardconchartComponent,
    ChartComponent,
    DashboardComponent,
    Chart2Component
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports:[DashboardComponent

  ]
})
export class DashboardModule { }
