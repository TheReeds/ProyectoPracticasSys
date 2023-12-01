import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar.component';

@Component({
  selector: 'app-opciones',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './opciones.component.html',
  styleUrl: './opciones.component.css'
})
export class OpcionesComponent {

}
