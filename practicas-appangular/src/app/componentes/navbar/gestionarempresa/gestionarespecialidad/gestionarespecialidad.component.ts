import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar.component';
import { ServicioempresaService } from '../servicioempresa.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestionarespecialidad',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule],
  templateUrl: './gestionarespecialidad.component.html',
  styleUrl: './gestionarespecialidad.component.css'
})
export class GestionarespecialidadComponent {

  nuevaEspecialidad: any = {
    nombre: '',
    area: '',
    descripcion: '',
  };
  especialidades: any[] = [];

  constructor(private apiService: ServicioempresaService) {}
  ngOnInit(): void {
    this.obtenerEspecialidades();
  }
  limpiarDatosFormulario() {
    this.nuevaEspecialidad = {
      nombre: '',
      area: '',
      descripcion: '',
    };
  }

  mostrarFormulario: boolean = false;

  obtenerEspecialidades() {
    this.apiService.getDataEspecialidades().subscribe(
      (response) => {
        this.especialidades = response; // La respuesta es directamente un array de especialidades
      },
      (error) => {
        console.error('Error al obtener las especialidades:', error);
        // Manejar el error según tus necesidades
      }
    );
  }
  mostrarFormularioNuevaEspecialidad() {
    this.mostrarFormulario = true;
  }
  cerrarFormulario() {
    this.mostrarFormulario = false;
    this.limpiarDatosFormulario();
  }
  crearEspecialidad() {
    this.apiService.postDataEspecialidad(this.nuevaEspecialidad).subscribe(
      (response) => {
        console.log('Especialidad creada con éxito:', response);
        this.obtenerEspecialidades(); // Actualiza la lista después de agregar una nueva especialidad
        this.limpiarDatosFormulario();
      },
      (error) => {
        console.error('Error al crear la especialidad:', error);
        // Manejar el error según tus necesidades
      }
    );
  }
  mostrarModalConfirmacion = false;
  especialidadAEliminar: any; //
  mostrarModal(eliminarEspecialidad: any) {
    this.especialidadAEliminar = eliminarEspecialidad;
    this.mostrarModalConfirmacion = true;
  }

  confirmarEliminacion() {
    // Lógica para confirmar la eliminación y cerrar el modal
    this.mostrarModalConfirmacion = false;
    // Llamada al servicio para eliminar la especialidad
    this.apiService.deleteEspecialidad(this.especialidadAEliminar.id).subscribe(
      (response) => {
        console.log('Especialidad eliminada con éxito:', response);
        this.obtenerEspecialidades(); // Actualiza la lista después de eliminar una especialidad
      },
      (error) => {
        console.error('Error al eliminar la especialidad:', error);
        // Manejar el error según tus necesidades
      }
    );
  }

  cerrarModal() {
    // Lógica para cerrar el modal sin eliminar la especialidad
    this.mostrarModalConfirmacion = false;
  }

}
