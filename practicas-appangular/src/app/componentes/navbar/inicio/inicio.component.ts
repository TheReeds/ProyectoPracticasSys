import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar.component';
import { InicioService } from './inicio.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  totalConvocatorias: number = 0;
  constructor(private convocatoriasService: InicioService) { }

  ngOnInit(): void {
    // Otras inicializaciones del componente

    // Obtener el total de convocatorias
    this.convocatoriasService.getDatos().subscribe(
      (response) => {
        this.totalConvocatorias = response.data.length;
      },
      (error) => {
        console.error('Error al obtener convocatorias:', error);
      }
    );
  }
}
