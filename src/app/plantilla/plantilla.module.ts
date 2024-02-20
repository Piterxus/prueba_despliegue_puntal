import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BotonComponent } from './boton/boton.component';
import { NavlateralComponent } from './navlateral/navlateral.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { ContenidoComponent } from './contenido/contenido.component';






@NgModule({
  declarations: [
    BotonComponent,
    NavlateralComponent,
    NavheaderComponent,
    ContenidoComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
      ContenidoComponent,
  ],
})
export class PlantillaModule {}
