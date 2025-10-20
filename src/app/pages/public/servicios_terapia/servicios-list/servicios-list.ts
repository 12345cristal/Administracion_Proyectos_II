// src/app/pages/public/servicios_terapia/servicios-list/servicios-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, SlicePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Servicio, ServicioService } from '../services/servicio';

@Component({
  selector: 'app-servicios-list',
  standalone: true,
  imports: [CommonModule, RouterModule, NgFor, SlicePipe],
  templateUrl: './servicios-list.html',
  styleUrls: ['./servicios-list.css']
})
export class ServiciosListComponent implements OnInit {
  servicios: Servicio[] = [];

  constructor(private servicioService: ServicioService) {}

  ngOnInit() {
    this.servicios = this.servicioService.getServicios();
  }
}
