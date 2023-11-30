  import { Component, OnInit } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { NavbarComponent } from '../navbar.component';
  import { ConvocatoriaService } from './services/convocatoria.service';
  import { Convocatoria } from '../convocatoria.model';
  import { CrearconvocatoriamodalComponent } from './crearconvocatoriamodal/crearconvocatoriamodal.component';
  import { EliminarconvocatoriamodalComponent } from './eliminarconvocatoriamodal/eliminarconvocatoriamodal.component';
  import { FormsModule } from '@angular/forms';

  @Component({
    selector: 'app-gestionarconvocatoria',
    standalone: true,
    imports: [CommonModule, NavbarComponent, CrearconvocatoriamodalComponent, EliminarconvocatoriamodalComponent, FormsModule],
    templateUrl: './gestionarconvocatoria.component.html',
    styleUrl: './gestionarconvocatoria.component.css'
  })
  export class GestionarconvocatoriaComponent implements OnInit{
    data: any[] = [];
    empresas: any[] = [];
    apiUrlImagenes: string = 'http://127.0.0.1:8000';

    modalState$ = this.convocatoriaService.modalState$;
    eliminarModalState$ = this.convocatoriaService.eliminarModalState$;

    convocatoriaEnEdicionId: number | null = null;
    convocatoriaEnEdicion: Convocatoria = {
      id: 0,
      titulo: '',
      descripcion: '',
      fechaInicio: new Date(),
      fechaFin: new Date(),
      empresa: { id: 0, nombre: '' },
      empresas: [],
      especialidad: { id: 0, nombre: '' },
      imagenes: [],
    };

    constructor(private convocatoriaService : ConvocatoriaService) { }

    idConvocatoriaSeleccionada: number = 0;


    ngOnInit(): void {
      this.loadConvocatorias();

    }
    loadConvocatorias() {
      this.convocatoriaService.getData().subscribe(response => {
        this.data = response.convocatorias;
      });

      // METODO AGARRAR EMPRESA
      this.convocatoriaService.getEmpresas().subscribe(response => {
        // Asegúrate de acceder a la propiedad 'data' en la respuesta
        this.empresas = response.data;
        console.log(this.empresas);
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
    obtenerNombreEmpresa(empresaid: number): string {
      const empresa = this.empresas.find(empresa => empresa.id === empresaid);
      return empresa ? empresa.razonsocial : 'Sin empresa';
    }
    onGuardarCompletado() {
      // Lógica para recargar la lista de convocatorias
      this.loadConvocatorias();

    }


    activarEdicion(convocatoriaId: number) {
      console.log('Activando edición para ID:', convocatoriaId);
      this.convocatoriaEnEdicionId = convocatoriaId;
      this.convocatoriaEnEdicion = { ...this.data.find(convocatoria => convocatoria.id === convocatoriaId) };
      console.log('Convocatoria en edición:', this.convocatoriaEnEdicion);
    }

    guardarEdicion() {
      this.convocatoriaService.updateConvocatoria(this.convocatoriaEnEdicionId!, this.convocatoriaEnEdicion).subscribe(
        () => {
          // Lógica para recargar la lista de convocatorias después de la actualización
          this.loadConvocatorias();

          // Desactivar el modo de edición
          this.cancelarEdicion();
        },
        error => {
          console.error('Error al actualizar convocatoria:', error);
          // Puedes manejar el error aquí, por ejemplo, mostrar un mensaje al usuario
        }
      );
    }

    cancelarEdicion() {
      // Desactivar el modo de edición
      this.convocatoriaEnEdicionId = null;
      // Restablecer la convocatoria en edición
      this.convocatoriaEnEdicion = {
        id: 0,
        titulo: '',
        descripcion: '',
        fechaInicio: new Date(),
        fechaFin: new Date(),
        empresa: { id: 0, nombre: '' },
        empresas: [],
        especialidad: { id: 0, nombre: '' },
        imagenes: [],
      };
    }
    cargarNuevaImagen(event: any): void {
      const file = event.target.files[0];
      if (file) {
        // Aquí puedes implementar la lógica para cargar la nueva imagen al servidor si es necesario
        // También puedes actualizar convocatoriaEnEdicion.imagen con la nueva ruta de la imagen
        console.log('Nueva imagen seleccionada:', file);
      }
    }





  }
