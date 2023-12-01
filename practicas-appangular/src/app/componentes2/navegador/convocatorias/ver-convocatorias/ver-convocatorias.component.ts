import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../../navbar-estudiante/navbar-estudiante.component';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-ver-convocatorias',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './ver-convocatorias.component.html',
  styleUrl: './ver-convocatorias.component.css'
})

export class VerConvocatoriasComponent {

  convocatorias: any[] = [];
  empresas: any[] = [];

  constructor(private apiService: ServicesService) {}

  ngOnInit(): void {
    this.obtenerConvocatorias();
    this.obtenerEmpresas();
  }

  obtenerConvocatorias() {
    this.apiService.getDataConvocatorias().subscribe(
      (response) => {
        // Asegurémonos de que existe la propiedad 'data'
        this.convocatorias = response.data || [];
      },
      (error) => {
        console.error('Error al obtener las convocatorias:', error);
      }
    );
  }

  obtenerUrlImagen(rutaImagen: string): string {
    const baseUrl = 'http://127.0.0.1:8000';
    return baseUrl + rutaImagen;
  }
  formatearFecha(fecha: string): string {
    // Puedes usar bibliotecas como 'date-fns' o 'moment' para un formato más avanzado
    return new Date(fecha).toLocaleDateString();
  }
  obtenerEmpresas() {
    this.apiService.getEmpresas().subscribe(
      (response) => {
        this.empresas = response.data;
      },
      (error) => {
        console.error('Error al obtener las empresas:', error);
      }
    );
  }
  obtenerNombreEmpresa(idEmpresa: number): string {
    const empresa = this.empresas.find(emp => emp.id === idEmpresa);
    return empresa ? empresa.razonsocial : '';
  }

}
