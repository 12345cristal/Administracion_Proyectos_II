import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto-form.html',
  styleUrls: ['./contacto-form.css']
})
export class ContactoFormComponent {
  nombre = '';
  correo = '';
  telefono = '';

  mensaje = '';
  mostrarConfirmacion = false;
  mensajeEnviado = false;

  confirmarEnvio() {
    this.mostrarConfirmacion = true; // Abre el modal
  }

  cancelarEnvio() {
    this.mostrarConfirmacion = false; // Cierra el modal
  }

  enviarFormulario() {
    this.mostrarConfirmacion = false;

    // Aquí más adelante se conectará con tu backend FastAPI
    // Ejemplo: this.http.post('http://localhost:8000/contacto', { nombre, correo, mensaje }).subscribe(...)

    this.mensajeEnviado = true;

    setTimeout(() => this.mensajeEnviado = false, 4000); // Desaparece después de 4s
  }
}
