import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormularioPbComponent } from './formulario-pb/formulario-pb.component';
import { TablaPbComponent } from './tabla-pb/tabla-pb.component';
import { FormdialogoPbComponent } from './formdialogo-pb/formdialogo-pb.component';
import { ContenidoPbComponent } from './contenido-pb/contenido-pb.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';



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
   
  ],
  exports: [ContenidoPbComponent, FormularioPbComponent],
  providers: [SharedDataService],
})
export class PlazaBaseModule {}
