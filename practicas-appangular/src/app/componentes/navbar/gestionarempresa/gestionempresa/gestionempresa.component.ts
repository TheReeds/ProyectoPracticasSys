import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-gestionempresa',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './gestionempresa.component.html',
  styleUrl: './gestionempresa.component.css'
})
export class GestionempresaComponent {

}
