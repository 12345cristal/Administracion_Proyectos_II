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
  servicio?: Servicio;

  constructor(
    private route: ActivatedRoute,
    private servicioService: ServicioService,
    public router: Router
  ) {}

 ngOnInit() {
  const nombre = this.route.snapshot.paramMap.get('nombre')!;
  this.servicio = this.servicioService.getServicios().find(s => s.nombre === nombre);

  if (!this.servicio) {
    this.router.navigate(['/servicios-terapia']);
  }
}


  goBack() {
    this.router.navigate(['/servicios-terapia']);
  }
}
