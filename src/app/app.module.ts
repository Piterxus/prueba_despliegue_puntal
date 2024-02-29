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
import { LoginModule } from './login/login.module';
import { PlazaBaseModule } from './plaza-base/plaza-base.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/auth.interceptor';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
@NgModule({
  declarations: [AppComponent, ErrorHandlerComponent],

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
    LoginModule,
    PlazaBaseModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    

  ],

  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
],
  bootstrap: [AppComponent],
})
export class AppModule { }
