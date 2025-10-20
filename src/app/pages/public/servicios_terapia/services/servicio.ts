// src/app/pages/public/servicios_terapia/services/servicio.service.ts
import { Injectable } from '@angular/core';

// Interfaz que define la estructura de un servicio/terapia
export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string;
  especialista: string;
  foto: string;
}

@Injectable({
  providedIn: 'root' // Esto hace que el servicio sea Singleton, disponible en toda la app
})
export class ServicioService {

  // Lista de terapias (simulando datos que podrían venir de un backend)
  private servicios: Servicio[] = [
    { id: 1, nombre: 'Fisioterapia', descripcion: 'Terapias físicas especializadas para mejorar la motricidad y coordinación.', especialista: 'Arisbeth Rodriguez Angulo (Uadeo)', foto: 'assets/images/fisio_tera.jpeg' },
    { id: 2, nombre: 'Neuroterapia', descripcion: 'Estimulación y rehabilitación neurológica para potenciar habilidades cognitivas.', especialista: 'Ana Lucía Cruz Solano (Uadeo)', foto: 'assets/images/neuro_tera.jpeg' },
    { id: 3, nombre: 'Lenguaje', descripcion: 'Intervención en comunicación y lenguaje para mejorar expresión y comprensión.', especialista: 'Judith', foto: 'assets/images/terapia_lenguaje.jpg' },
    { id: 4, nombre: 'Psicología', descripcion: 'Apoyo emocional y conductual para niños y jóvenes con TEA.', especialista: 'Jesús y Rocío', foto: 'assets/images/psico_tera.jpg' },
    { id: 5, nombre: 'Psicopedagogía', descripcion: 'Acompañamiento educativo personalizado para potenciar aprendizaje.', especialista: 'Ariadna Soto Quiñonez (UPES)', foto: 'assets/images/psicope_tera.jpg' }
  ];

  // Retorna todos los servicios
  getServicios(): Servicio[] {
    return this.servicios;
  }

  // Retorna un servicio específico por su ID
  getServicioById(id: number): Servicio | undefined {
    return this.servicios.find(s => s.id === id);
  }
}
