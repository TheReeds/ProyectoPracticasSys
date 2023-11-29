import { ChangeDetectorRef, Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Convocatoria } from '../../convocatoria.model';
import { GestionarconvocatoriaComponent } from '../gestionarconvocatoria.component';
import { ConvocatoriaService } from '../services/convocatoria.service';
import { forkJoin } from 'rxjs';



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
    imagen: null
    // Otros campos del formulario
  };
  @Output() guardarCompletado = new EventEmitter<void>();

  isOpen = false;
  constructor(private http: HttpClient, private convocatoriaService : ConvocatoriaService, private actualizacionService : ConvocatoriaService, private cd: ChangeDetectorRef) {}




    data: any[] = [];
    empresas: any[] = [];
    submitForm() {
      // Manipula las fechas antes de enviar el formulario al servidor
      this.formData.fecha_inicio = this.formatoFecha(this.formData.fecha_inicio);
      this.formData.fecha_fin = this.formatoFecha(this.formData.fecha_fin);

      const formData = new FormData();
      formData.append('titulo', this.formData.titulo);
      formData.append('descripcion', this.formData.descripcion);
      formData.append('fecha_inicio', this.formData.fecha_inicio);
      formData.append('fecha_fin', this.formData.fecha_fin);
      formData.append('empresa_id', this.formData.empresa_id);
      if (this.formData.imagen !== null) {
        formData.append('imagen', this.formData.imagen);
      }

      this.convocatoriaService.closeModal();

      // Aquí puedes llamar a tu función para enviar los datos al servidor usando HttpClient
      this.http.post('http://127.0.0.1:8000/api/convocatorias', formData).subscribe(
        (response) => {
          console.log('Datos enviados con éxito:', response);
          // Realiza acciones adicionales si es necesario
          this.guardarCompletado.emit();
        },
        (error) => {
          console.error('Error al enviar datos:', error);
          // Maneja el error según tus necesidades
        }
      );
        this.guardarCompletado.emit();

    }
    onFileSelected(event: any) {
      this.formData.imagen = event.target.files[0];
    }

    formatoFecha(fecha: string): string {
      // Convierte la fecha al formato 'Y-m-d'
      const fechaObj = new Date(fecha);
      const year = fechaObj.getFullYear();
      const month = (fechaObj.getMonth() + 1).toString().padStart(2, '0');
      const day = fechaObj.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

   ngOnInit(): void {
      this.convocatoriaService.modalState$.subscribe((isOpen) => {
        this.isOpen = isOpen;
        this.loadConvocatorias();
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
    loadConvocatorias() {
      forkJoin({
        convocatorias: this.convocatoriaService.getData(),
        empresas: this.convocatoriaService.getEmpresas(),
      }).subscribe(response => {
        this.data = response.convocatorias.data;
        this.empresas = response.empresas.data;
      });
    }
}
