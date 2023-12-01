import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from 'src/app/componentes/login/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-estudiante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar-estudiante.component.html',
  styleUrl: './navbar-estudiante.component.css'
})
export class NavbarEstudianteComponent {
  constructor(private authService: AuthServiceService, private router: Router) {}
  sidebarOpen = false;
  sidebarOpen2 = false;
  sidebarOpen3 = false;
  userName: string | null = null;
  userRole: string | null = null;


  ngOnInit() {
    this.userName = this.authService.getUserName();
    this.userRole = this.authService.getUserRole();
  }

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
  logout(): void {
    this.router.navigate(['/login']);
    this.authService.logout().subscribe(
      () => {
        // Manejar el éxito del cierre de sesión, por ejemplo, redirigir a la página de inicio de sesión
        console.log('Cierre de sesión exitoso');

        // Redirigir a la página de inicio de sesión
        // this.router.navigate(['/login']);
      },
      (errorMessage) => {
        // Manejar el error del cierre de sesión
        console.error('Error durante el cierre de sesión:', errorMessage);
        // Puedes mostrar un mensaje al usuario indicando que ocurrió un error
      }
    );
  }
}
