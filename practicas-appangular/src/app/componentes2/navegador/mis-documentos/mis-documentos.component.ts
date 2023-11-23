import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-mis-documentos',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './mis-documentos.component.html',
  styleUrl: './mis-documentos.component.css'
})
export class MisDocumentosComponent {

}
