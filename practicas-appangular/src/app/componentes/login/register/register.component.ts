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
  rol: string = '';
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

  onSubmit(registerForm: NgForm): void {
    console.log('Selected Role:', this.selectedRole);
    // Verificar si el formulario es válido
    if (registerForm.valid) {
      // Llamar al método register del servicio de autenticación
      this.authService.register(this.name, this.email, this.password, this.selectedRole).subscribe(
        (response: any) => {
          // Manejar la respuesta exitosa
          console.log('Registro exitoso:', response);
          this.router.navigate(['/login']);
        },
        (errorMessage) => {
          // Manejar el mensaje de error y mostrarlo al usuario
          this.errorMessage = errorMessage;
          this.showNotification = true;
          console.error('Error durante el registro:', errorMessage);
        }
      );
    } else {
      this.incompleteFieldsError = 'Por favor, completa todos los campos del formulario.';
    }
  }
  closeNotification(): void {
    this.showNotification = false;
    this.incompleteFieldsError = '';
    this.errorMessage = '';
  }
}
