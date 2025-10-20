// src/app/app.routes.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes públicos
import { HomeComponent } from './pages/public/home/home.component';
import { AboutComponent } from './pages/public/about/about.component';
import { ContactComponent } from './pages/public/contact/contact.component';
import { DonarComponent } from './pages/public/donar/donar.component';
import { ServiciosListComponent } from './pages/public/servicios_terapia/servicios-list/servicios-list';
import { ServicioDetailComponent } from './pages/public/servicios_terapia/servicio-detail/servicio-detail';

// Componente de autenticación
import { LoginComponent } from './pages/auth/login/login.component';

// Guardia de autenticación
import { AuthGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'donar', component: DonarComponent },

  // Rutas de terapias
  { path: 'servicios-terapia', component: ServiciosListComponent },           // lista de terapias
  { path: 'servicios-terapia/:id', component: ServicioDetailComponent },      // detalle de terapia con ID

  { path: 'login', component: LoginComponent },

  // Lazy loading con AuthGuard
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard').then(m => m.Dashboard),
    canActivate: [AuthGuard]
  },
  {
    path: 'ninos',
    loadChildren: () =>
      import('./pages/ninos/ninos').then(m => m.Ninos),
    canActivate: [AuthGuard]
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./pages/usuarios/usuarios').then(m => m.Usuarios),
    canActivate: [AuthGuard]
  },
  {
    path: 'terapias',
    loadChildren: () =>
      import('./pages/terapias/terapias').then(m => m.Terapias),
    canActivate: [AuthGuard]
  },
  {
    path: 'asistencias',
    loadChildren: () =>
      import('./pages/asistencias/asistencias').then(m => m.Asistencias),
    canActivate: [AuthGuard]
  },
  {
    path: 'pagos',
    loadChildren: () =>
      import('./pages/pagos/pagos').then(m => m.Pagos),
    canActivate: [AuthGuard]
  },
  {
    path: 'reportes',
    loadChildren: () =>
      import('./pages/reportes/reportes').then(m => m.Reportes),
    canActivate: [AuthGuard]
  },
  {
    path: 'encuestas',
    loadChildren: () =>
      import('./pages/encuestas/encuestas').then(m => m.Encuestas),
    canActivate: [AuthGuard]
  },

  { path: '**', redirectTo: '', pathMatch: 'full' } // fallback
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
