import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';



@NgModule({
  declarations: [
    NotificacionesComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule
  ]
})
export class NotificacionesModule { }
