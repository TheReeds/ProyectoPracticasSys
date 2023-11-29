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

        this.router.navigate(['/inicio']);

        // Puedes redirigir a otra página o realizar acciones adicionales aquí
      },
      (errorMessage) => {
        // Manejar el mensaje de error y mostrarlo al usuario
        console.error('Error:', errorMessage);

        // Aquí puedes mostrar el mensaje de error al usuario, por ejemplo:
        // this.errorMessage = errorMessage;
      }
    );

    // Puedes acceder a los valores del formulario usando form.value


    // Aquí puedes realizar acciones adicionales, como enviar el formulario al servidor
    console.log('Formulario válido. Enviar al servidor...');
  }

}
