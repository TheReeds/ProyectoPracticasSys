import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errorMessage: string | null = null;
  incompleteFieldsError: string | null = null;
  showNotification: boolean = false;


  name: string = '';
  email: string = '';
  password: string = '';
  //role: string = 'alumno'; // Default role
  selectedRole: string = ''; // Modelo para almacenar la opción seleccionada

  constructor(private authService: AuthServiceService, private router: Router) {}
  ngOnInit() {
    // Si el usuario ya está autenticado, redirigir a la ruta /inicio
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/inicio']);
    }
  }

  // ... (otros códigos y lógica de tu componente) ...

  onSubmit(form: NgForm) {
    console.log('Rol seleccionado:', this.selectedRole);
    // Reiniciar errores y otros pasos del registro
    this.errorMessage = null;
    this.incompleteFieldsError = null;

    // Puedes usar el valor de selectedRole aquí según tus necesidades
    const { name, email, password} = form.value;

    if (!name || !email || !password) {
      this.incompleteFieldsError = 'Por favor, complete todos los campos.';
      this.showNotification = true;
      return;
    }

    this.authService.register(name, email, password).subscribe(
      (response: any) => {
        // Manejar la respuesta exitosa

        console.log('Registro exitoso:', response);
        this.router.navigate(['/login']);

        // Puedes redirigir a otra página o realizar acciones adicionales aquí
      },
      (errorMessage) => {

        this.errorMessage = errorMessage;
        this.showNotification = true;
        // Manejar el mensaje de error y mostrarlo al usuario
        console.error('Error durante el registro:', errorMessage);


        // Aquí puedes mostrar el mensaje de error al usuario, por ejemplo:
        // this.errorMessage = errorMessage;
      }
    );




  }
  closeNotification() {
    this.showNotification = false;
  };
}
