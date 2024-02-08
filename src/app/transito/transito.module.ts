import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoTransitoComponent } from './contenido-transito/contenido-transito.component';
import { TablaTransitoComponent } from './tabla-transito/tabla-transito.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormdialogoComponent } from './formdialogo/formdialogo.component';
import { TablaTripulanteComponent } from './tabla-tripulante/tabla-tripulante.component';
import { DataTablesModule } from 'angular-datatables';
import { FormularioTransitoComponent } from './formulario-transito/formulario-transito.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
const routes: Routes = [
  {
    path: 'transito',
    component: ContenidoTransitoComponent,
    children: [
      { path: 'tabla', component: TablaTransitoComponent },
      { path: 'formulario', component: FormularioTransitoComponent },
      { path: '', redirectTo: 'tabla', pathMatch: 'full' },
      // Puedes agregar más rutas según tus necesidades
    ],
  },
];

@NgModule({
  declarations: [
    FormularioComponent,
    ContenidoTransitoComponent,
    TablaTransitoComponent,
    FormdialogoComponent,
    TablaTripulanteComponent,
    FormularioTransitoComponent,
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [ContenidoTransitoComponent],
})
export class TransitoModule {}
