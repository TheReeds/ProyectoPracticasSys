import { Component, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { GestionarconvocatoriaComponent } from '../gestionarconvocatoria.component';
import { ConvocatoriaService } from '../services/convocatoria.service';

@Component({
  selector: 'app-eliminarconvocatoriamodal',
  standalone: true,
  imports: [CommonModule, GestionarconvocatoriaComponent],
  templateUrl: './eliminarconvocatoriamodal.component.html',
  styleUrl: './eliminarconvocatoriamodal.component.css'
})

export class EliminarconvocatoriamodalComponent {
  @Input() id: number = 0;


  constructor(private convocatoriaService : ConvocatoriaService) {}
  isOpen2: boolean = false;

  ngOnInit() {
    this.convocatoriaService.eliminarModalState$.subscribe((isOpen2) => {
      this.isOpen2 = isOpen2;
    });

  }

  cerrarModalEliminar() {
    // Cierra el modal de eliminación usando el servicio
    this.convocatoriaService.closeEliminarModal();
  }
  eliminarConvocatoria(){
    console.log(this.id);
    this.convocatoriaService.deleteConvocatoria(this.id).subscribe(
      () => {
        console.log(`Convocatoria eliminada con éxito, id: ${this.id}`);
      },
      (error) => {
        console.error('Error al eliminar la convocatoria', error);
      }
    );
    this.id = 0;
    this.cerrarModalEliminar();

  }



}
