import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-redes',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="redes-flotantes">
    <a href="https://wa.me/526681494834" target="_blank"><i class="fab fa-whatsapp"></i></a>
    <a href="https://www.facebook.com/AutismoMochis" target="_blank"><i class="fab fa-facebook"></i></a>
    <a href="https://www.instagram.com/autismomochis" target="_blank"><i class="fab fa-instagram"></i></a>
  </div>
  `,
  styles:[`.redes-flotantes { position: fixed; bottom: 2rem; right: 2rem; display: flex; flex-direction: column; gap:0.5rem;}
  .redes-flotantes a i { font-size:2rem; color:#fff; background-color:#3b82f6; border-radius:50%; padding:0.5rem; }`]
})
export class RedesComponent {}
