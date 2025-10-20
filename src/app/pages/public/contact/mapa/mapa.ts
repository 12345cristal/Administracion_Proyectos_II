import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [CommonModule],
  template: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!..." width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
})
export class MapaComponent {}
