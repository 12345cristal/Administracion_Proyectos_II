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
  mensaje = '';

  enviarFormulario() {
    alert(`Gracias ${this.nombre}, tu mensaje fue enviado con éxito.`);
  }
}
