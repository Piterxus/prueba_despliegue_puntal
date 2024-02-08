import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BotonComponent } from './boton/boton.component';
import { NavlateralComponent } from './navlateral/navlateral.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { TransitoModule } from '../transito/transito.module';


const routes: Routes = [
  {
    path: '',
    component: ContenidoComponent,
    children: [
     { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule) },
  
    ],
  },
];


@NgModule({
  declarations: [
    BotonComponent,
    NavlateralComponent,
    NavheaderComponent,
    ContenidoComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [
      ContenidoComponent,
  ],
})
export class PlantillaModule {}
