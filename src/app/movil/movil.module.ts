import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantillaGuardamuellesComponent } from './plantilla-guardamuelles/plantilla-guardamuelles.component';
import { CardTransitoComponent } from './card-transito/card-transito.component';
import { CardConfirmacionTransitoComponent } from './card-confirmacion-transito/card-confirmacion-transito.component';
import { CardIncidenciaComponent } from './card-incidencia/card-incidencia.component';
import { RouterModule, Routes } from '@angular/router';
import { ListaCardsComponent } from './lista-cards/lista-cards.component';

const routes: Routes = [
  {
    path: '',
    component: ListaCardsComponent,
    children: [
      { path: 'card-incidencia', component: CardIncidenciaComponent },
      { path: 'card-confirmacion-transito', component: CardConfirmacionTransitoComponent },
      { path: '', redirectTo: 'card-incidencia', pathMatch: 'full' },
    ],
  },
];
@NgModule({
  declarations: [
    PlantillaGuardamuellesComponent,
    CardTransitoComponent,
    CardConfirmacionTransitoComponent,
    CardIncidenciaComponent,
    ListaCardsComponent
  ],
  imports: [
    CommonModule,/* RouterModule.forChild(routes)*/
  ],
  exports:[PlantillaGuardamuellesComponent

  ]
})
export class MovilModule { }
