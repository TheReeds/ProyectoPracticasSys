import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-inicio-estudiante',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './inicio-estudiante.component.html',
  styleUrl: './inicio-estudiante.component.css'
})
export class InicioEstudianteComponent {

}
