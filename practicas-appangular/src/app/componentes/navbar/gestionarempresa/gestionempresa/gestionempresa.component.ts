import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import { NavbarComponent } from '../../navbar.component';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-gestionempresa',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './gestionempresa.component.html',
  styleUrl: './gestionempresa.component.css'
})
export class GestionempresaComponent{

}
