import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent {

}
