import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-carta-presentacion',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './carta-presentacion.component.html',
  styleUrl: './carta-presentacion.component.css'
})
export class CartaPresentacionComponent {

}
