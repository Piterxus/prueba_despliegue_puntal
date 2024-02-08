import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { DataTablesModule } from 'angular-datatables';
import { EmbarcacionesComponent } from './embarcaciones/embarcaciones.component';
import { FormularioEmbarcacionComponent } from './formulario-embarcacion/formulario-embarcacion.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormdialogoemComponent } from './formdialogoem/formdialogoem.component';
const routes: Routes = [
  {
    path: 'embarcaciones',
    component: EmbarcacionesComponent,
    children: [
      { path: 'tabla', component: TablaComponent },
      { path: 'formulario', component: FormularioEmbarcacionComponent },
      { path: '', redirectTo: 'tabla', pathMatch: 'full' },
      // Puedes agregar más rutas según tus necesidades
    ]
  },
];

@NgModule({
  declarations: [
    TablaComponent,
    EmbarcacionesComponent,
    FormularioEmbarcacionComponent,
    FormdialogoemComponent,
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [
    EmbarcacionesComponent
  ]
})
export class EmbarcacionModule { }
