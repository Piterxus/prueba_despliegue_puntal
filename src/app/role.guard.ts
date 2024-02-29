import { inject } from '@angular/core'; // Importación de módulo necesario para inyectar dependencias
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Router } from '@angular/router'; // Importación de módulos necesarios para el manejo de rutas

export const roleGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const role = localStorage.getItem('role'); // Se obtiene el rol del usuario del almacenamiento local
  const requiredRole:string = route.data['role']; // Se obtiene el rol requerido de la ruta actual

  // El rol 1 es el rol de administrador y tiene acceso a todas las rutas
  if (role==='1'){
    return true;
  }
  // Si el rol del usuario no coincide con el rol requerido, se redirige al usuario a la ruta correspondiente
  if (role !== requiredRole) {
    switch (role) {
      case '2':
      
      inject(Router).navigate(['dashboard']);
        break;
      case '3':
     
        inject(Router).navigate(['movil']);
        break;
      case '4':
        inject(Router).navigate(['guardiacivil']);
        break;
      default:
        inject(Router).navigate(['login']);
        break;
    }
    // Se devuelve falso para indicar que el usuario no tiene acceso a la ruta
    return false;
    
  }

  // Se devuelve verdadero para indicar que el usuario tiene acceso a la ruta
  return true;
};
