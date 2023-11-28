import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../../navbar-estudiante/navbar-estudiante.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carta-presentacion',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './carta-presentacion.component.html',
  styleUrl: './carta-presentacion.component.css'
})
export class CartaPresentacionComponent {

  mostrarFormulario() {
    // Muestra el formulario como una notificación utilizando SweetAlert2
    Swal.fire({
      title: 'Llenar Formulario',
      html: '<h2>Llenar Formulario</h2>', // Agrega aquí el contenido del formulario
      showCloseButton: true,
      showConfirmButton: false,
    });
  }
}
