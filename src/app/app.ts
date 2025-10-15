import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ✅ Importa RouterOutlet

// Componentes compartidos
import { Navbar } from './shared/components/navbar/navbar';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, // ✅ Necesario para que funcione <router-outlet>
    Navbar,
    Sidebar,
    Footer
  ],
  template: `
    <div class="app-container">
      <!-- Barra de navegación -->
      <app-navbar></app-navbar>

      <div class="main-content">
        <!-- Menú lateral -->
        <app-sidebar></app-sidebar>

        <!-- Contenido dinámico (rutas) -->
        <div class="page-content">
          <router-outlet></router-outlet>
        </div>
      </div>

      <!-- Pie de página -->
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }

    .main-content {
      display: flex;
      flex: 1;
    }

    .page-content {
      flex: 1;
      padding: 1rem;
      overflow-y: auto;
    }
  `]
})
export class AppComponent {}
