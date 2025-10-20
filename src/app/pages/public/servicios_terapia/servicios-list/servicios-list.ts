import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Servicio, ServicioService } from '../services/servicio';

@Component({
  selector: 'app-servicios-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
