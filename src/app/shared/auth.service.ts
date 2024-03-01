import { Injectable } from '@angular/core'; // Decorador que permite inyectar dependencias al servicio
import { HttpClient } from '@angular/common/http'; // Importación de módulos necesarios para el manejo de peticiones HTTP
import { Observable } from 'rxjs'; // Importación de módulos necesarios para manejo de observables

// Clase que define el modelo de usuario
export class User {
  name!: String;
  email!: String;
  password!: String;
  password_confirmation!: String;
} 

@Injectable({
  providedIn: 'root'
}) // Decorador que define la inyección de dependencias del servicio en el módulo raíz
export class AuthService {

  // Método constructor para crear un objeto del servicio
  constructor(private http: HttpClient) {

   }
   // Registro. Se envía una petición HTTP POST al servidor con los datos del usuario. Por ahora no se usa.
   register(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }
  // Login, se envía una petición HTTP POST al servidor con los datos del usuario. En uso
  signin(user: User): Observable<any> {
   
    // return this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
    return this.http.post<any>('http://alum1.iesfsl.org/api/auth/login', user);
  }
  // Access user profile. Se envía una petición HTTP GET al servidor para obtener el perfil del usuario. Por ahora no se usa.
  profileUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/user-profile');
  }
}
