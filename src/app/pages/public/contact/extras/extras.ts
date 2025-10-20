import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-extras',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Datos confidenciales. Conexión segura <i class="fa fa-lock"></i></p>`
})
export class ExtrasComponent {}
