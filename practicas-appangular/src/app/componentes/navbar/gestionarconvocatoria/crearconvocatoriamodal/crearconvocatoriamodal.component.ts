import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crearconvocatoriamodal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crearconvocatoriamodal.component.html',
  styleUrl: './crearconvocatoriamodal.component.css'
})
export class CrearconvocatoriamodalComponent {
  isOpen = false;

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
  }
}
