import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-gestionar-planpracticas',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './gestionar-planpracticas.component.html',
  styleUrl: './gestionar-planpracticas.component.css'
})
export class GestionarPlanpracticasComponent {

}
