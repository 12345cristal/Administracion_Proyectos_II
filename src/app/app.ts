import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Navbar, Footer], // ❌ Sin RouterModule.forRoot()
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}
