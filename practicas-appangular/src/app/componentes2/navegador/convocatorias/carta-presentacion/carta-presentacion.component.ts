import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarEstudianteComponent } from '../../navbar-estudiante/navbar-estudiante.component';

@Component({
  selector: 'app-carta-presentacion',
  standalone: true,
  imports: [CommonModule, NavbarEstudianteComponent],
  templateUrl: './carta-presentacion.component.html',
  styleUrl: './carta-presentacion.component.css'
})
export class CartaPresentacionComponent {

  /*mostrarFormulario() {
    Swal.fire({
      html: `
      <div class="container mx-auto my-8 p-8 bg-gray-200 text-gray-800 rounded-lg shadow-md">
  <h2 class="text-3xl font-bold mb-6">Generar Carta de Presentación</h2>
  <form>
    <div class="mb-4">
      <label for="especialidad" class="block text-sm font-semibold mb-2">Especialidad:</label>
      <select class="w-full px-4 py-2 bg-gray-300 focus:outline-none focus:bg-gray-400">
        <option>Opción 1</option>
        <option>Opción 2</option>
        <option>Opción 3</option>
      </select>
    </div>

    <div class="mb-4">
      <label for="empresa" class="block text-sm font-semibold mb-2">Empresa:</label>
      <select class="w-full px-4 py-2 bg-gray-300 focus:outline-none focus:bg-gray-400">
        <option>Opción 1</option>
        <option>Opción 2</option>
        <option>Opción 3</option>
      </select>
    </div>

    <div class="mb-4">
      <label for="comentario" class="block text-sm font-semibold mb-2">Comentario:</label>
      <textarea class="w-full px-4 py-2 bg-gray-300 focus:outline-none focus:bg-gray-400" rows="4" id="comentario"></textarea>
    </div>

    <div class="flex">
      <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded-md mr-2 hover:bg-blue-600">Enviar</button>
      <button type="button" class="border border-blue-500 text-blue-500 px-6 py-2 rounded-md hover:bg-blue-100">Volver</button>
    </div>
  </form>
</div>
      `,
      showCancelButton: false,
      showConfirmButton: false,
    });
  }*/
}
