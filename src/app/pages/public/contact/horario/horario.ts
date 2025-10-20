import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-horario',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Horario: Lunes a Viernes 8:00-13:00 / 15:00-18:00 | <span [ngClass]="abierto ? 'open' : 'closed'">{{ abierto ? 'Abierto' : 'Cerrado' }}</span></p>`,
  styles: [`.open{color:green}.closed{color:red}`]
})
export class HorarioComponent {
  abierto = ((h=new Date().getHours(), d=new Date().getDay()) => d>=1 && d<=5 && ((h>=8 && h<13) || (h>=15 && h<18)))();
}
