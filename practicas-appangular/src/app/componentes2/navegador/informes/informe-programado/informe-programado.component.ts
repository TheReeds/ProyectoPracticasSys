import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-informe-programado',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './informe-programado.component.html',
  styleUrl: './informe-programado.component.css'
})
export class InformeProgramadoComponent {

}
