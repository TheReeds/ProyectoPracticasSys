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
    empresas: any[] = [];
    apiUrlImagenes: string = 'http://127.0.0.1:8000';

    modalState$ = this.convocatoriaService.modalState$;
    eliminarModalState$ = this.convocatoriaService.eliminarModalState$;
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




  }
