import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;

  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit() {
    // Si el usuario ya está autenticado, redirigir a la ruta /inicio
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/inicio']);
    }
  }

  onSubmit(form: NgForm) {
    // Reiniciar errores
    this.emailError = false;
    this.passwordError = false;

    // Validar el formulario antes de enviarlo
    if (!this.email) {
      this.emailError = true;
      return;
    }

    if (!this.password) {
      this.passwordError = true;
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password).subscribe(
      (response: any) => {
        // Manejar la respuesta exitosa
        console.log('Respuesta exitosa:', response);

        // Llamar al método para manejar el token después del inicio de sesión exitoso
        this.authService.handleLoginSuccess(response);

        // Obtener el rol del usuario
        const userRole = this.authService.getUserRole();

        // Redirigir a la ruta correspondiente según el rol
        if (userRole === 'Coordinador') {
          this.router.navigate(['/inicio']);
        } else if (userRole === 'Alumno') {
          this.router.navigate(['/estudiantes/inicio']);
        } else {
          // Si no se reconoce el rol, redirigir a una ruta predeterminada
          console.log('Rol no encontrada, redirigiendo')
          this.router.navigate(['/inicio']);
        }

        // Puedes redirigir a otras páginas o realizar acciones adicionales aquí
      },
      // ... Resto del código
    );

    // Puedes acceder a los valores del formulario usando form.value


    // Aquí puedes realizar acciones adicionales, como enviar el formulario al servidor
    console.log('Formulario válido. Enviar al servidor...');
  }

}
