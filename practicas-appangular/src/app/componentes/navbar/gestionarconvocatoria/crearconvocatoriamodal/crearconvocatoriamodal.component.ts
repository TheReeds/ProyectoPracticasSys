import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GestionarconvocatoriaComponent } from '../gestionarconvocatoria.component';
import { ConvocatoriaService } from '../services/convocatoria.service';



@Component({
  selector: 'app-crearconvocatoriamodal',
  standalone: true,
  imports: [CommonModule, FormsModule, GestionarconvocatoriaComponent],
  templateUrl: './crearconvocatoriamodal.component.html',
  styleUrl: './crearconvocatoriamodal.component.css'
})

export class CrearconvocatoriamodalComponent {
  formData = {
    titulo: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_fin: '',
    empresa_id: '',
    // Otros campos del formulario
  };
  isOpen = false;
  constructor(private http: HttpClient, private convocatoriaService : ConvocatoriaService) {}


  submitForm() {
    // Manipula las fechas antes de enviar el formulario al servidor
    this.formData.fecha_inicio = this.formatoFecha(this.formData.fecha_inicio);
    this.formData.fecha_fin = this.formatoFecha(this.formData.fecha_fin);

    // Aquí puedes llamar a tu función para enviar los datos al servidor usando HttpClient
      const apiUrl = 'http://127.0.0.1:8000/api/convocatorias';
      this.http.post(apiUrl, this.formData).subscribe(
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

   ngOnInit() {
      this.convocatoriaService.modalState$.subscribe((isOpen) => {
        this.isOpen = isOpen;
      });

    }
    cerrarModal() {
      this.convocatoriaService.closeModal();
    }
    cerrarModalOutside(event: Event) {
      // Verifica si se hizo clic fuera del contenido del formulario
      const target = event.target as HTMLElement;
      if (target.classList.contains('bg-opacity-50')) {
        this.convocatoriaService.closeModal();
      }
  }
}
