import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-ver-convocatorias',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './ver-convocatorias.component.html',
  styleUrl: './ver-convocatorias.component.css'
})
export class VerConvocatoriasComponent {

}
