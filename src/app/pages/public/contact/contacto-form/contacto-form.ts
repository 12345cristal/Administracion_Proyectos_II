// C:\Users\crist\OneDrive\Escritorio\ProyectoAM\AMApp\src\app\pages\public\contacto\contacto-form.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactoService } from '../../../../core/services/contacto.service';


@Component({
  selector: 'app-contacto-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto-form.html',
  styleUrls: ['./contacto-form.css']
})
export class ContactoFormComponent {
  // Campos del formulario
  nombre = '';
  correo = '';
  telefono = '';
  mensaje = '';

  // Variables para controlar el estado del formulario
  mostrarConfirmacion = false;
  mensajeEnviado = false;
  errorEnvio = '';
  enviando = false;

  constructor(private contactoService: ContactoService) {}

  // Muestra el cuadro de confirmación antes de enviar
  confirmarEnvio() {
    this.mostrarConfirmacion = true;
  }

  // Cancela el envío del mensaje
  cancelarEnvio() {
    this.mostrarConfirmacion = false;
  }

  // Envía el formulario al backend
  enviarFormulario() {
    this.mostrarConfirmacion = false;
    this.errorEnvio = '';
    this.enviando = true;

    // Datos del formulario
    const datos = {
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      mensaje: this.mensaje
    };

    // Llamada al servicio que conecta con el backend
    this.contactoService.enviarMensaje(datos).subscribe({
      next: () => {
        this.mensajeEnviado = true;
        this.enviando = false;
        this.limpiarFormulario();
        setTimeout(() => (this.mensajeEnviado = false), 4000);
      },
      error: (err) => {
        console.error('Error al enviar el mensaje:', err);
        this.errorEnvio = 'No se pudo enviar el mensaje. Inténtalo más tarde.';
        this.enviando = false;
      }
    });
  }

  // Limpia los campos del formulario
  limpiarFormulario() {
    this.nombre = '';
    this.correo = '';
    this.telefono = '';
    this.mensaje = '';
  }
}
