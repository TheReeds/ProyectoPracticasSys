import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Verifica si el usuario está autenticado
    if (this.authService.isAuthenticated()) {
      return true; // Permite el acceso a la ruta
    } else {
      // Redirige a la página de inicio de sesión si el usuario no está autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}
