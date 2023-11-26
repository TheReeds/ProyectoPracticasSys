import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-crearconvocatoriamodal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crearconvocatoriamodal.component.html',
  styleUrl: './crearconvocatoriamodal.component.css'
})

export class CrearconvocatoriamodalComponent {

  constructor(private http: HttpClient) {}

  isOpen = false;

  openModal() {
    this.isOpen = true;

  }

  closeModal() {
    this.isOpen = false;
  }
  formData: {
    titulo: string,
    descripcion: string,
    empresa: string,
    fechaInicio: string,
    fechaFin: string
    // Agrega otras propiedades según sea necesario
  } = {
    titulo: '',
    descripcion: '',
    empresa: '',
    fechaInicio: '',
    fechaFin: ''
    // Inicializa otras propiedades según sea necesario
  };
  onSubmit(form: NgForm) {
    // Aquí puedes enviar los datos al API en Laravel
    // Utiliza this.formData para acceder a los datos del formulario

    console.log('Enviando datos al servidor:', this.formData);

    // Limpia el formulario después de enviar los datos si es necesario
    form.resetForm();
  }
}
