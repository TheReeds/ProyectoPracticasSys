import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private tokenKey = 'auth_token';

  private userData: any = null;

  constructor(private http: HttpClient) {}

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }



  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post(`${this.apiUrl}/login`, body, { headers })
      .pipe(
        catchError((error) => {
          // Aquí puedes manejar el error y proporcionar mensajes específicos al usuario
          let errorMessage = 'Ocurrió un error.';

          if (error.error instanceof ErrorEvent) {
            // Error del lado del cliente
            errorMessage = `Error: ${error.error.message}`;
          } else {
            // El servidor devolvió un código de error
            errorMessage = `Código de error: ${error.status}\nMensaje: ${error.error.message || 'Ocurrió un error en el servidor.'}`;
          }

          return throwError(errorMessage);
        })
      );
  }



  logout(): Observable<any> {
    localStorage.removeItem(this.tokenKey);
    return this.http.get(`${this.apiUrl}/logout`, {}).pipe(
      catchError((error) => {
        // Aquí puedes manejar el error y proporcionar mensajes específicos al usuario
        let errorMessage = 'Ocurrió un error durante el cierre de sesión.';

        if (error.error instanceof ErrorEvent) {
          // Error del lado del cliente
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // El servidor devolvió un código de error
          errorMessage = `Código de error: ${error.status}\nMensaje: ${error.error.message || 'Ocurrió un error en el servidor.'}`;
        }

        return throwError(errorMessage);
      })
    );
  }

  handleLoginSuccess(response: any): void {
    // Verifica si hay un token en la respuesta
    if (response && response.access_token) {
      const token = response.access_token;
      this.setToken(token);

      // Almacena la información del usuario en el servicio y en localStorage
      this.userData = response.user;
      localStorage.setItem('userData', JSON.stringify(response.user));
      localStorage.setItem('authToken', token);
    }
  }

  isAuthenticated(): boolean {
    // Verifica si el usuario está autenticado, por ejemplo, si tiene un token válido
    const token = this.getToken();
    return token !== null && token !== undefined;
  }
  register(name: string, email: string, password: string): Observable<any> {
    const body = { name, email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(`${this.apiUrl}/register`, body, { headers })
      .pipe(
        catchError((error) => {
          // Manejar el error según sea necesario
          let errorMessage = 'Ocurrió un error durante el registro.';

          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
          } else {
            errorMessage = `Código de error: ${error.status}\nMensaje: ${error.error.message || 'Ocurrió un error en el servidor.'}`;
          }

          return throwError(errorMessage);
        })
      );
  }





  getUserName(): string | null {
    // Utiliza la información del usuario almacenada en userData o localStorage
    return this.userData ? this.userData.name : this.getStoredUserName();
  }

  private getStoredUserName(): string | null {
    const storedUserData = localStorage.getItem('userData');
    return storedUserData ? JSON.parse(storedUserData).name : null;
  }











}
