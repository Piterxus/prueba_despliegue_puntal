import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { Routes } from '@angular/router';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
// ];

@NgModule({
  declarations: [
    LoginComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[
    LoginComponent,
  ]
})
export class LoginModule { }
