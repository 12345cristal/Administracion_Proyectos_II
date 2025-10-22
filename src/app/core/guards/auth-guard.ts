import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth'; // ✅ IMPORTACIÓN CORRECTA
// Asegúrate que el archivo se llame `auth.ts` y esté en: src/app/core/services/auth.ts

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const token = this.authService.getToken();

    if (token) {
      // Si existe token, el usuario puede acceder
      return true;
    } else {
      // Si no hay token, redirige al login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
