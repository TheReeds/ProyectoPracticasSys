import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../navbar-estudiante/navbar-estudiante.component';
import { SolicitarserviceService } from './solicitarservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-solicitar-empresa',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent, FormsModule],
  templateUrl: './solicitar-empresa.component.html',
  styleUrl: './solicitar-empresa.component.css'
})
export class SolicitarEmpresaComponent {
  constructor(private nuevasEmpresasService: SolicitarserviceService) {}
  razonSocial: string = '';
  direccion: string = '';
  email: string = '';
  ruc: string = ''; // Cambié el tipo a string para alinearlo con el tipo en el formulario
  ubicacion: string = '';
  telefono: string = '';

  onSubmit() {
    // Obtén los valores del formulario (puedes usar dos vías [(ngModel)] o Reactive Forms)


    const nuevaEmpresa = {
      razon_social: this.razonSocial,
      direccion: this.direccion,
      email: this.email,
      ruc: this.ruc,
      ubicacion: this.ubicacion,
      telefono: this.telefono,
    };

    // Llama al método del servicio para crear la nueva empresa
    this.nuevasEmpresasService.createNuevaEmpresa(nuevaEmpresa).subscribe(
      (response) => {
        console.log('Empresa creada con éxito:', response);
        // Aquí puedes manejar la respuesta o redirigir a otra página
      },
      (error) => {
        console.error('Error al crear la empresa:', error);
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje al usuario
      }
    );
  }
}
