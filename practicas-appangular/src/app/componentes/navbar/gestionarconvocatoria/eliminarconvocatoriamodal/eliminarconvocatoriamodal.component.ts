import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() confirmarEliminacion: EventEmitter<number> = new EventEmitter<number>();


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



}
