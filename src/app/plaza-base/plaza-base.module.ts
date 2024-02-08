import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormularioPbComponent } from './formulario-pb/formulario-pb.component';
import { TablaPbComponent } from './tabla-pb/tabla-pb.component';
import { FormdialogoPbComponent } from './formdialogo-pb/formdialogo-pb.component';
import { ContenidoPbComponent } from './contenido-pb/contenido-pb.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

const routes: Routes = [
  {
    path: 'plazabase',
    component: ContenidoPbComponent,
    children: [
      { path: 'tabla', component: TablaPbComponent },
      { path: 'formulario', component: FormularioPbComponent },
      { path: '', redirectTo: 'tabla', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    FormularioPbComponent,
    TablaPbComponent,
    FormdialogoPbComponent,
    ContenidoPbComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule,
    RouterModule.forChild(routes),
  ],
  exports: [ContenidoPbComponent, FormularioPbComponent],
})
export class PlazaBaseModule {}
