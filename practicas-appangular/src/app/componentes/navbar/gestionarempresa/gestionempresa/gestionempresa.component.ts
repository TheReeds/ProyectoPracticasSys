import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import { NavbarComponent } from '../../navbar.component';
import { Route, Routes } from '@angular/router';
import { ServicioempresaService } from '../servicioempresa.service';
import { FormsModule } from '@angular/forms';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-gestionempresa',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule],
  templateUrl: './gestionempresa.component.html',
  styleUrl: './gestionempresa.component.css'
})
export class GestionempresaComponent{

  responseData: any;

  constructor(private apiService: ServicioempresaService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.apiService.getData().subscribe(
      response => { this.responseData = response.data;


        console.log('datos',this.responseData);


      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

  mostrarFormulario: boolean = false;
  nuevaEmpresa: any = {
    razonsocial: '',
    direccion: '',
    ubicacion: '',
    email: '',
    ruc: null,
    telefono: '',
  };
  cerrarFormulario() {
    this.mostrarFormulario = false;
    this.mostrarFormulario2 = false;
    this.limpiarDatosFormulario();
  }

  mostrarFormularioNuevaEmpresa() {
    this.mostrarFormulario = true;
  }
  limpiarDatosFormulario() {
    this.nuevaEmpresa.razonsocial = '';
    this.nuevaEmpresa.direccion = '';
    this.nuevaEmpresa.ubicacion = '';
    this.nuevaEmpresa.email = '';
    this.nuevaEmpresa.ruc = null;
    this.nuevaEmpresa.telefono = '';
  }
  crearNuevaEmpresa() {
    console.log('a', this.nuevaEmpresa);
    const datosParaEnviar = { ...this.nuevaEmpresa };
    Object.keys(datosParaEnviar).forEach(
      (key) => (datosParaEnviar[key] === '' || datosParaEnviar[key] === null) && delete datosParaEnviar[key]
    );

    this.apiService.postData(datosParaEnviar).subscribe(
      (response) => {
        console.log('Empresa creada con éxito:', response.data);
        this.cerrarFormulario();
      },
      (error) => {
        console.error('Error al crear la empresa:', error);
        // Manejar el error según tus necesidades
      }
    );
  }
  confirmarBorradoEmpresa(empresaId: number) {
    const confirmacion = confirm('¿Estás seguro de que deseas borrar esta empresa?');

    if (confirmacion) {
      this.borrarEmpresa(empresaId);
    }
  }

  borrarEmpresa(empresaId: number) {
    // Lógica para borrar la empresa utilizando el servicio
    this.apiService.deleteEmpresa(empresaId).subscribe(
      () => {
        console.log('Empresa borrada con éxito');
        // Puedes recargar los datos o actualizar la vista según sea necesario
      },
      (error) => {
        console.error('Error al borrar la empresa:', error);
        // Manejar el error según tus necesidades
      }
    );
  }

  empresaEnEdicion: any = null;
  mostrarFormulario2: boolean = false;
  mostrarFormularioEdicion(empresaId: number) {
    this.apiService.getEmpresaById(empresaId).subscribe(
      (response) => {
        this.empresaEnEdicion = response.data;
        this.mostrarFormulario2 = true;// Mostrar el formulario de edición
      },
      (error) => {
        console.error('Error al obtener detalles de la empresa:', error);
      }
    );
  }

  actualizarEmpresa() {
    if (!this.empresaEnEdicion) {
      console.error('No hay datos para actualizar la empresa.');
      return;
    }

    this.apiService.updateEmpresa(this.empresaEnEdicion.id, this.empresaEnEdicion).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);

        // Ajusta aquí según cómo el servidor responde después de la actualización
        const empresaActualizada = response?.data || response;

        console.log('Empresa actualizada con éxito:', empresaActualizada);
        this.cerrarFormulario();
      },
      (error) => {
        console.error('Error al actualizar la empresa:', error);
        // Manejar el error según tus necesidades
      }
    );
  }


}


