// src/app/pages/public/servicios_terapia/servicio-detail/servicio-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Servicio, ServicioService } from '../services/servicio';

@Component({
  selector: 'app-servicio-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicio-detail.html',
  styleUrls: ['./servicio-detail.css']
})
export class ServicioDetailComponent implements OnInit {

  servicio?: Servicio; // Servicio seleccionado

  constructor(
    private route: ActivatedRoute, // Para obtener parámetros de URL
    private servicioService: ServicioService, // Servicio para traer los datos
    public router: Router // Público para usarlo en template
  ) {}

  ngOnInit() {
    // Obtenemos el ID del servicio desde la URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.servicio = this.servicioService.getServicioById(id);

    // Redirigimos si el servicio no existe
    if (!this.servicio) {
      this.router.navigate(['/servicios-terapia']);
    }
  }

  // Método para volver a la lista
  goBack() {
    this.router.navigate(['/servicios-terapia']);
  }
}
