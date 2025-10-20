// C:\Users\crist\OneDrive\Escritorio\ProyectoAM\AMApp\src\app\core\services\contacto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaz para tipar los mensajes del formulario
export interface ContactoMensaje {
  nombre: string;
  correo: string;
  asunto?: string;
  mensaje: string;
}

@Injectable({
  providedIn: 'root' // Singleton: disponible en toda la app
})
export class ContactoService {
  // URL del endpoint de FastAPI
  private apiUrl = 'http://localhost:8000/contacto/';

  constructor(private http: HttpClient) {}

  // Método para enviar el mensaje al backend
  enviarMensaje(data: ContactoMensaje): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
