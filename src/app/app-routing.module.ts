import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContenidoTransitoComponent } from './transito/contenido-transito/contenido-transito.component';
import { TablaTransitoComponent } from './transito/tabla-transito/tabla-transito.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmbarcacionesComponent } from './embarcacion/embarcaciones/embarcaciones.component';
import { CardIncidenciaComponent } from './movil/card-incidencia/card-incidencia.component';
import { CardConfirmacionTransitoComponent } from './movil/card-confirmacion-transito/card-confirmacion-transito.component';
import { NotificacionesComponent } from './notificaciones/notificaciones/notificaciones.component';
import { TablaGuardiaComponent } from './guardia-civil/tabla-guardia/tabla-guardia.component';
import { ContenidoPbComponent } from './plaza-base/contenido-pb/contenido-pb.component';
import { FormularioPbComponent } from './plaza-base/formulario-pb/formulario-pb.component';

const routes: Routes = [
  
  { path: 'dashboard', component: DashboardComponent},
  { path: 'embarcacion/embarcaciones', component: EmbarcacionesComponent},
  { path: 'transito/tabla-transito', component: TablaTransitoComponent },
  { path: 'plazabase/formulario', component: FormularioPbComponent},
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'movil/card-incidencia', component: CardIncidenciaComponent},
  { path: 'guardacivil', redirectTo: 'guardia-civil/tabla-guardia', pathMatch: 'full' },
  { path: 'plazabase', component: ContenidoPbComponent},
 
  { path: 'movil/card-confirmacion-transito', component: CardConfirmacionTransitoComponent},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
