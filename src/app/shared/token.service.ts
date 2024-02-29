import { Injectable } from '@angular/core'; // Decorador que permite inyectar dependencias al servicio
// import { BehaviorSubject } from 'rxjs'; // Importación de módulos necesarios para manejo de observables
@Injectable({
  providedIn: 'root'
})
// Servicio TokenService
export class TokenService {
  // Objeto que almacena las rutas de acceso a los endpoints de autenticación
  private issuer = {
    login: 'http://127.0.0.1:8000/api/auth/login',
    register: 'http://127.0.0.1:8000/api/auth/register',
  };
  // Método constructor para crear un objeto del servicio
  constructor() { }
  // Almacenar el token de autenticación
  handleData(token: any) {
    localStorage.setItem('auth_token', token);
  }
  // Obtener el token de autenticación
  getToken() {
    return localStorage.getItem('auth_token');
  }
  // Verificar si el token es válido
  isValidToken() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1
          ? true
          : false;
      }
    } else {
      return false;
    }
  }
  // Obtener el payload del token. El payload es la parte del token que contiene la información del usuario.
  payload(token: any) {
    // Inevitable manejarlo así. Devuelve valor true o false, pero no token.
    if (token === 'true') {
      return { authenticated: token };
    }

    if (!token) {
      this.removeToken();
      return null;
    }

    try {
      const jwtPayload = token.split('.')[1];
      return JSON.parse(atob(jwtPayload));
    } catch (error) {
      console.log('Token is not valid:', error);
      this.removeToken();
      return null;
    }
  }

  // Verificar si el usuario está autenticado
  isLoggedIn() {
    return this.isValidToken();
  }
  // Eliminar el token de autenticación y otros datos del usuario de la memoria local.
  removeToken() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
  }
}
