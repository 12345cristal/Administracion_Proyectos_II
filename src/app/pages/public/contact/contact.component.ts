import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoInfoComponent } from './contacto-info/contacto-info';
import { ContactoFormComponent } from './contacto-form/contacto-form';
import { HorarioComponent } from './horario/horario';
import { RedesComponent } from './redes/redes';
import { MapaComponent } from './mapa/mapa';
import { ExtrasComponent } from './extras/extras';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ContactoInfoComponent,
    ContactoFormComponent,
    HorarioComponent,
    RedesComponent,
    MapaComponent,
    ExtrasComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {}
