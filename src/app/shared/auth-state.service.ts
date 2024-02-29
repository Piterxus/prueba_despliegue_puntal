import { Injectable } from '@angular/core'; // Decorador que permite inyectar dependencias al servicio
import { BehaviorSubject } from 'rxjs'; // Importación de módulos necesarios para manejo de observables
import { TokenService } from './token.service';  // Importación de servicio TokenService

@Injectable({
  providedIn: 'root'
}) // Decorador que define la inyección de dependencias del servicio en el módulo raíz
export class AuthStateService {
  private userState = new BehaviorSubject<boolean>(this.token.isLoggedIn()!); // BehaviorSubject (tipo de sujeto observable que mantiene y emite el valor más reciente a todos sus observadores) que almacena el estado de autenticación del usuario
  userAuthState = this.userState.asObservable(); // Observable que emite el valor del BehaviorSubject
  constructor(public token: TokenService) { } // Método constructor para crear un objeto del servicio
  setAuthState(value: boolean) {
    this.userState.next(value);
  } // Método para establecer el estado de autenticación del usuario
}
