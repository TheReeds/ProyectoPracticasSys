import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
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
  isMenuOpen = true;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    // Puedes agregar más lógica aquí, como emitir un evento, cambiar clases, etc.
  }

}
