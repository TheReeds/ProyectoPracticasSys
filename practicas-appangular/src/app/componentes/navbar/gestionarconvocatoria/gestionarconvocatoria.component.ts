import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar.component';
import { ConvocatoriaService } from './services/convocatoria.service';
import { Convocatoria } from '../convocatoria.model';
import { CrearconvocatoriamodalComponent } from './crearconvocatoriamodal/crearconvocatoriamodal.component';

@Component({
  selector: 'app-gestionarconvocatoria',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CrearconvocatoriamodalComponent],
  templateUrl: './gestionarconvocatoria.component.html',
  styleUrl: './gestionarconvocatoria.component.css'
})
export class GestionarconvocatoriaComponent implements OnInit{
  data: any[] = [];
  constructor(private convocatoriaService : ConvocatoriaService) { }


  ngOnInit(): void {
    this.loadConvocatorias();
  }
  loadConvocatorias() {
    this.convocatoriaService.getData().subscribe(response => {
      this.data = response.data;
      console.log(this.data);
    });
  }
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
