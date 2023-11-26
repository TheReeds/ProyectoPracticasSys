  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { NavbarComponent } from '../navbar.component';
  import { ConvocatoriaService } from './services/convocatoria.service';
  import { Convocatoria } from '../convocatoria.model';
  import { CrearconvocatoriamodalComponent } from './crearconvocatoriamodal/crearconvocatoriamodal.component';
  import { EliminarconvocatoriamodalComponent } from './eliminarconvocatoriamodal/eliminarconvocatoriamodal.component';

  @Component({
    selector: 'app-gestionarconvocatoria',
    standalone: true,
    imports: [CommonModule, NavbarComponent, CrearconvocatoriamodalComponent, EliminarconvocatoriamodalComponent],
    templateUrl: './gestionarconvocatoria.component.html',
    styleUrl: './gestionarconvocatoria.component.css'
  })
  export class GestionarconvocatoriaComponent implements OnInit{
    data: any[] = [];

    modalState$ = this.convocatoriaService.modalState$;
    eliminarModalState$ = this.convocatoriaService.eliminarModalState$;
    constructor(private convocatoriaService : ConvocatoriaService) { }

    idConvocatoriaSeleccionada: number = 0;


    ngOnInit(): void {
      this.loadConvocatorias();

    }
    loadConvocatorias() {
      this.convocatoriaService.getData().subscribe(response => {
        this.data = response.data;
        console.log(this.data);
      });
    }
    abrirModal() {
      this.convocatoriaService.openModal();
    }

    cerrarModal() {
      this.convocatoriaService.closeModal();
    }

    abrirModalEliminar(idConvocatoria: number) {
      console.log('Abriendo modal para eliminar con ID:', idConvocatoria);
      this.idConvocatoriaSeleccionada = idConvocatoria;
      this.convocatoriaService.openEliminarModal();
    }

    cerrarModalEliminar() {
      this.convocatoriaService.closeEliminarModal();
    }

    borrarConvocatoria(idConvocatoria: number) {
      this.convocatoriaService.deleteConvocatoria(idConvocatoria).subscribe(
        () => {
          console.log('Convocatoria eliminada exitosamente');
          // Puedes realizar acciones adicionales después de la eliminación si es necesario
        },
        (error) => {
          console.error('Error al eliminar la convocatoria', error);
          // Manejo de errores si es necesario
        }
      );
    }

    // Método para manejar el evento de confirmación de eliminación
    onConfirmarEliminacion(idConvocatoria: number) {
      this.borrarConvocatoria(idConvocatoria);
    }


  }
