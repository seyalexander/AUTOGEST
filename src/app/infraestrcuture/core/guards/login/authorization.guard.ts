import { CanActivateFn } from '@angular/router';

export const authorizationGuard: CanActivateFn = (route, state) => {
  // Implementa la lógica de autorización aquí
  // Por ejemplo, verifica si el usuario tiene los permisos necesarios
  const hasPermission = true; // Lógica de autorización

  if (hasPermission) {
    return true;
  } else {
    // Redirige a una página de acceso no autorizado si el usuario no tiene permisos suficientes
    // Puedes acceder al enrutador a través del inyector de dependencias si es necesario
    return false;
  }

};
