import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-mis-convocatorias',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './mis-convocatorias.component.html',
  styleUrl: './mis-convocatorias.component.css'
})
export class MisConvocatoriasComponent {

}
