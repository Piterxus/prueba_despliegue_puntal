import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovilModule } from './movil/movil.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PlantillaModule } from './plantilla/plantilla.module';
import { EmbarcacionModule } from './embarcacion/embarcacion.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { GuardiaCivilModule } from './guardia-civil/guardia-civil.module';
import { TransitoModule } from './transito/transito.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    MovilModule,
    DashboardModule,
    AppRoutingModule,
    PlantillaModule,
    EmbarcacionModule,
    NotificacionesModule,
    GuardiaCivilModule,
    TransitoModule,
    BrowserAnimationsModule,

  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
