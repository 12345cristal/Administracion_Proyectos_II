// C:\Users\crist\OneDrive\Escritorio\ProyectoAM\AMApp\src\app\core\services\contacto.service.ts

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private apiUrl = 'http://localhost:8000/contacto'; // URL del endpoint en tu backend FastAPI

  private http = inject(HttpClient);

  // Envía los datos del formulario al backend
  enviarMensaje(datos: any): Observable<any> {
    return this.http.post(this.apiUrl, datos);
  }
}
