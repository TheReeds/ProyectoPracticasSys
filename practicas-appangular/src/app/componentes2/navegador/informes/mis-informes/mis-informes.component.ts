import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-mis-informes',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './mis-informes.component.html',
  styleUrl: './mis-informes.component.css'
})
export class MisInformesComponent {

}
