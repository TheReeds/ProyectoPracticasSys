import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar-estudiante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-estudiante.component.html',
  styleUrl: './navbar-estudiante.component.css'
})
export class NavbarEstudianteComponent {
  sidebarOpen = false;
  sidebarOpen2 = false;
  sidebarOpen3 = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  toggleSidebar2() {
    this.sidebarOpen2 = !this.sidebarOpen2;
  }
  toggleSidebar3() {
    this.sidebarOpen3 = !this.sidebarOpen3;
  }
}
