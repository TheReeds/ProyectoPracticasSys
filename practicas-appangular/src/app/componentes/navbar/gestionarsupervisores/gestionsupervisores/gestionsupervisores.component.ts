import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar.component';

@Component({
  selector: 'app-gestionsupervisores',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './gestionsupervisores.component.html',
  styleUrl: './gestionsupervisores.component.css'
})
export class GestionsupervisoresComponent {

}
