import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../navbar-estudiante/navbar-estudiante.component';
import { GestionarplanService } from './gestionarplan.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gestionar-planpracticas',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent, FormsModule],
  templateUrl: './gestionar-planpracticas.component.html',
  styleUrl: './gestionar-planpracticas.component.css'
})

export class GestionarPlanpracticasComponent {

  constructor(private servicio: GestionarplanService, private http: HttpClient) { }
  formData = {


        fecha_inicio_plan:'',
        fecha_fin_plan: '',
        horas_planificadas: '',
        horas_semanales_planificadas:'',
        modalidad: '',
        turno: '',
        nombre_apellido_jefe: '',
        email_jefe: '',
        wahtsapp_jefe: '',
        tiempo_informe: '',

  }; // Modelo para almacenar los datos del formulario


  submitForm() {

    this.formData.fecha_inicio_plan = this.formatoFecha(this.formData.fecha_inicio_plan);
      this.formData.fecha_fin_plan = this.formatoFecha(this.formData.fecha_fin_plan);

    const formData = new FormData();
      formData.append('fecha_inicio_plan', this.formData.fecha_inicio_plan);
      formData.append('fecha_fin_plan', this.formData.fecha_fin_plan);
      formData.append('horas_planificadas', this.formData.horas_planificadas);
      formData.append('horas_semanales_planificadas', this.formData.horas_semanales_planificadas);
      formData.append('modalidad', this.formData.modalidad);
      formData.append('turno', this.formData.turno);
      formData.append('nombre_apellido_jefe', this.formData.nombre_apellido_jefe);
      formData.append('email_jefe', this.formData.email_jefe);
      formData.append('wahtsapp_jefe', this.formData.wahtsapp_jefe);
      formData.append('tiempo_informe', this.formData.tiempo_informe);

      this.http.post('http://127.0.0.1:8000/api/planpracticas', formData).subscribe(
        (response) => {
          console.log('Datos enviados con éxito:', response);
          // Realiza acciones adicionales si es necesario
        },
        (error) => {
          console.error('Error al enviar datos:', error);
          // Maneja el error según tus necesidades
        }
      );

  }


  formatoFecha(fecha: string): string {
    // Convierte la fecha al formato 'Y-m-d'
    const fechaObj = new Date(fecha);
    const year = fechaObj.getFullYear();
    const month = (fechaObj.getMonth() + 1).toString().padStart(2, '0');
    const day = fechaObj.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }


}
