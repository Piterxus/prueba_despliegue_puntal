import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaGuardiaComponent } from './tabla-guardia/tabla-guardia.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    TablaGuardiaComponent
  ],
  imports: [
    CommonModule,DataTablesModule
  ],
  exports:[
    TablaGuardiaComponent
  ]
})
export class GuardiaCivilModule { }
