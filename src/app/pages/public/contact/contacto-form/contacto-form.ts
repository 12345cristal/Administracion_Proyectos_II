// C:\Users\crist\OneDrive\Escritorio\ProyectoAM\AMApp\src\app/pages/public/contact/contacto-form/contacto-form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactoService, ContactoMensaje } from '../../../../core/services/contacto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacto-form.html',
  styleUrls: ['./contacto-form.css']
})
export class ContactoFormComponent {
  // Flag para mostrar mensaje de éxito
  mensajeEnviado: boolean = false;

  // FormGroup con validaciones
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactoService: ContactoService) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.minLength(3)],
      mensaje: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  // Método para enviar mensaje al backend
  enviarMensaje(): void {
    if (this.contactForm.valid) {
      const data: ContactoMensaje = this.contactForm.value;
      this.contactoService.enviarMensaje(data).subscribe({
        next: () => {
          this.mensajeEnviado = true;
          this.contactForm.reset();
        },
        error: (err) => {
          console.error('Error al enviar mensaje:', err);
          alert('Error al enviar mensaje. Intenta nuevamente.');
        }
      });
    } else {
      alert('Por favor completa todos los campos correctamente.');
    }
  }
}
