import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar.component';

@Component({
  selector: 'app-gestiondocumentos',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './gestiondocumentos.component.html',
  styleUrl: './gestiondocumentos.component.css'
})
export class GestiondocumentosComponent {

}
