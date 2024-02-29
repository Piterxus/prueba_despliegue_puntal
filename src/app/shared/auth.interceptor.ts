import { Injectable } from "@angular/core"; // Decorador que permite inyectar dependencias al servicio
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http"; // Importación de módulos necesarios para el manejo de peticiones HTTP
import { TokenService } from "../shared/token.service"; // Importación de servicio TokenService
@Injectable() // Decorador que define la inyección de dependencias del servicio en el módulo raíz
export class AuthInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) { } // Método constructor para crear un objeto del servicio
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const accessToken = this.tokenService.getToken(); // Se obtiene el token de acceso del servicio TokenService
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + accessToken
            }
        }); // Se clona la petición HTTP y se establece el encabezado de autorización con el token de acceso

        // Se devuelve la petición HTTP clonada
        return next.handle(req);
    }
}

/*

Este interceptor en Angular se utiliza para agregar automáticamente el encabezado de autorización a todas las solicitudes HTTP salientes. 
El encabezado de autorización contiene un token de acceso que generalmente se utiliza para autenticar al usuario en el servidor.

*/