import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-mis-evaluaciones',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './mis-evaluaciones.component.html',
  styleUrl: './mis-evaluaciones.component.css'
})
export class MisEvaluacionesComponent {

}
