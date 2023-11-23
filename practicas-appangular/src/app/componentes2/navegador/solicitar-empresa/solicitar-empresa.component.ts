import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-solicitar-empresa',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './solicitar-empresa.component.html',
  styleUrl: './solicitar-empresa.component.css'
})
export class SolicitarEmpresaComponent {

}
