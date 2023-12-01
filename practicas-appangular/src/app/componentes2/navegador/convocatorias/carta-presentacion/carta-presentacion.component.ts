import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../../navbar-estudiante/navbar-estudiante.component';
import { ServicesService } from '../services.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carta-presentacion',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent, FormsModule],
  templateUrl: './carta-presentacion.component.html',
  styleUrl: './carta-presentacion.component.css'
})
export class CartaPresentacionComponent {
  Formulario = false;
  empresas: any[] = [];
  especialidades: any[] = [];
  cartaPresentacion: any = {};
  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    // Llama a tus métodos para obtener la lista de empresas y especialidades
    this.cargarEmpresas();
    this.cargarEspecialidades();
  }

  mostrarFormulario() {
    // Añadir un nuevo formulario al arreglo
    this.Formulario=true
  }

  cerrarFormulario() {
    // Cierra el formulario al hacer clic en "Volver"
    this.Formulario = false;
  }
  cargarEmpresas() {
    this.servicesService.getEmpresas().subscribe(
      (response) => {
        console.log(response); // Imprime la respuesta en la consola
        this.empresas = response.data; // Ajusta según la estructura real
      },
      (error) => {
        console.error('Error al cargar empresas:', error);
      }
    );
  }
  cargarEspecialidades() {
    this.servicesService.getDataEspecialidades().subscribe(
      (response) => {
        this.especialidades = response; // Asigna la respuesta directamente
      },
      (error) => {
        console.error('Error al cargar especialidades:', error);
      }
    );
  }
}

