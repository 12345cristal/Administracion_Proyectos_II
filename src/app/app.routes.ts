// src/app/app.routes.ts
import { Routes } from '@angular/router';

// 🏠 Componentes públicos
import { HomeComponent } from './pages/public/home/home.component';
import { AboutComponent } from './pages/public/about/about.component';
import { ContactComponent } from './pages/public/contact/contact.component';
import { DonarComponent } from './pages/public/donar/donar.component';
import { ServiciosListComponent } from './pages/public/servicios_terapia/servicios-list/servicios-list';
import { ServicioDetailComponent } from './pages/public/servicios_terapia/servicio-detail/servicio-detail';

// 🔐 Autenticación
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthGuard } from './core/guards/auth-guard';

// 🚦 Definición de rutas
export const routes: Routes = [
  // 🌍 Rutas públicas
  { path: '', component: HomeComponent, title: 'Inicio - La Casita Azul' },
  { path: 'about', component: AboutComponent, title: 'Sobre Nosotros' },
  { path: 'contact', component: ContactComponent, title: 'Contacto' },
  { path: 'donar', component: DonarComponent, title: 'Donar' },

  // 💬 Rutas de terapias
  { path: 'servicios-terapia', component: ServiciosListComponent, title: 'Terapias' },
  { path: 'servicios-terapia/:nombre', component: ServicioDetailComponent, title: 'Detalle de Terapia' },

  // 🔑 Login
  { path: 'login', component: LoginComponent, title: 'Iniciar Sesión' },

  // 📊 Secciones protegidas (solo usuarios logueados)
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [AuthGuard],
    title: 'Panel de Control'
  },
  {
    path: 'ninos',
    loadChildren: () => import('./pages/ninos/ninos').then(m => m.Ninos),
    canActivate: [AuthGuard],
    title: 'Gestión de Niños'
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios').then(m => m.Usuarios),
    canActivate: [AuthGuard],
    title: 'Gestión de Usuarios'
  },
  {
    path: 'terapias',
    loadChildren: () => import('./pages/terapias/terapias').then(m => m.Terapias),
    canActivate: [AuthGuard],
    title: 'Gestión de Terapias'
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./pages/asistencias/asistencias').then(m => m.Asistencias),
    canActivate: [AuthGuard],
    title: 'Control de Asistencias'
  },
  {
    path: 'pagos',
    loadChildren: () => import('./pages/pagos/pagos').then(m => m.Pagos),
    canActivate: [AuthGuard],
    title: 'Gestión de Pagos'
  },
  {
    path: 'reportes',
    loadChildren: () => import('./pages/reportes/reportes').then(m => m.Reportes),
    canActivate: [AuthGuard],
    title: 'Reportes'
  },
  {
    path: 'encuestas',
    loadChildren: () => import('./pages/encuestas/encuestas').then(m => m.Encuestas),
    canActivate: [AuthGuard],
    title: 'Encuestas'
  },

  // 🚨 Ruta por defecto o inexistente
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
