import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar.component';
import { ConvocatoriaService } from 'src/app/convocatoria.service';
import { Convocatoria } from '../convocatoria.model';

@Component({
  selector: 'app-gestionarconvocatoria',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './gestionarconvocatoria.component.html',
  styleUrl: './gestionarconvocatoria.component.css'
})
export class GestionarconvocatoriaComponent {
  convocatorias: Convocatoria[] = [];
  constructor(private convocatoriasService: ConvocatoriaService) { }

}
