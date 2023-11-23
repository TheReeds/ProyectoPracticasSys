import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
