import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoTransitoComponent } from './contenido-transito/contenido-transito.component';
import { TablaTransitoComponent } from './tabla-transito/tabla-transito.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormularioComponent } from '../formulario/formulario.component';
import { FormdialogoComponent } from './formdialogo/formdialogo.component';
import { TablaTripulanteComponent } from './tabla-tripulante/tabla-tripulante.component';
import { DataTablesModule } from 'angular-datatables';
import { FormularioTransitoComponent } from './formulario-transito/formulario-transito.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';


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
  
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [ContenidoTransitoComponent],
  providers: [SharedDataService],
})
export class TransitoModule {}
