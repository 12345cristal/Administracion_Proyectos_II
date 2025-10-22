import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo = '';
  contrasena = '';
  showPassword = false;

  constructor(private auth: AuthService, private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (!this.correo || !this.contrasena) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, ingresa tu correo y contraseña.',
        confirmButtonColor: '#2563eb'
      });
      return;
    }

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoValido.test(this.correo)) {
      Swal.fire({
        icon: 'error',
        title: 'Correo inválido',
        text: 'Por favor, introduce un correo electrónico válido.',
        confirmButtonColor: '#2563eb'
      });
      return;
    }

    this.auth.login(this.correo, this.contrasena).subscribe({
      next: (res) => {
        if (res.access_token) {
          this.auth.setToken(res.access_token);
          Swal.fire({
            icon: 'success',
            title: 'Bienvenido',
            text: 'Inicio de sesión exitoso',
            timer: 1500,
            showConfirmButton: false
          }).then(() => this.router.navigate(['/dashboard']));
        }
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Acceso denegado',
          text: 'Correo o contraseña incorrectos.',
          confirmButtonColor: '#2563eb'
        });
      }
    });
  }
}
