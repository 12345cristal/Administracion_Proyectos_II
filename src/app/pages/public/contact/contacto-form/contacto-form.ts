import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { ContactoService } from '../../../../core/services/contacto.service';

@Component({
  selector: 'app-contacto-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto-form.html',
  styleUrls: ['./contacto-form.css']
})
export class ContactoFormComponent {
  contactoForm: FormGroup;
  enviando = false;
  mensajeExito = '';
  mensajeError = '';

  constructor(private fb: FormBuilder, private contactoService: ContactoService) {
    this.contactoForm = this.fb.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
        Validators.pattern(/^[A-ZÁÉÍÓÚÑa-záéíóúñ]+(?: [A-ZÁÉÍÓÚÑa-záéíóúñ]+)*$/),
        this.nombreRealValidator
      ]],
      correo: ['', [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)
      ]],
      telefono: ['', [
        Validators.required,
        Validators.pattern(/^(?:\+52\s?)?[1-9]\d{9}$/),
        this.telefonoRealValidator
      ]],
      mensaje: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000),
        this.mensajeCoherenteValidator
      ]]
    });
  }

  enviar() {
    if (this.contactoForm.invalid) {
      this.mensajeError = 'Por favor completa todos los campos correctamente.';
      return;
    }

    this.enviando = true;
    this.mensajeError = '';
    this.mensajeExito = '';

    this.contactoService.enviarMensaje(this.contactoForm.value).subscribe({
      next: () => {
        this.mensajeExito = 'Mensaje enviado correctamente.';
        this.contactoForm.reset();
        this.enviando = false;
      },
      error: (err) => {
        this.mensajeError = 'Error al enviar el mensaje. Inténtalo más tarde.';
        console.error(err);
        this.enviando = false;
      }
    });
  }

  campoInvalido(campo: string) {
    const control = this.contactoForm.get(campo);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  // Validaciones personalizadas
  nombreRealValidator(control: AbstractControl) {
    const valor = control.value;
    if (!valor) return null;
    // Rechaza nombres con solo letras repetidas o combinaciones raras
    if (/^([A-Za-zÁÉÍÓÚÑáéíóúñ])\1+$/.test(valor.replace(/\s+/g, ''))) {
      return { nombreNoReal: true };
    }
    return null;
  }

  telefonoRealValidator(control: AbstractControl) {
    const valor = control.value.replace(/\D/g, ''); // Quita espacios o guiones
    // Rechaza todos iguales
    if (/^(\d)\1{9}$/.test(valor)) return { telefonoNoReal: true };
    return null;
  }

  mensajeCoherenteValidator(control: AbstractControl) {
    const valor = control.value;
    if (!valor) return null;
    // Rechaza mensajes vacíos, solo puntos, comas o símbolos
    if (/^[.,;!?()\s]+$/.test(valor)) return { mensajeNoCoherente: true };
    return null;
  }
}
