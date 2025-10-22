import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AuthResponse {
  access_token: string;
  token_type: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/auth/login';

  constructor(private http: HttpClient) {}

  // Inicia sesión con correo y contraseña
  login(correo: string, contraseña: string): Observable<AuthResponse> {
    const body = { correo, contraseña };
    return this.http.post<AuthResponse>(this.apiUrl, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Guarda el token en localStorage
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Obtiene el token actual
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Elimina el token (cerrar sesión)
  logout() {
    localStorage.removeItem('token');
  }

  // Verifica si el usuario está logueado
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
