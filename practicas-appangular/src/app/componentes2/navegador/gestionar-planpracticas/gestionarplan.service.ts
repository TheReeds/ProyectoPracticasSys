import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GestionarplanService {

  private apiUrl = 'http://127.0.0.1:8000/api/planpracticas';  // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

  agregarDatos(datos: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, datos);
  }

  actualizarDatos(id: number, nuevosDatos: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, nuevosDatos);
  }

  eliminarDatos(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }


  enviarDatos(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }


  verificarPlanExistente(alumnoId: string): Observable<boolean> {
    // Lógica para verificar si el alumno ya tiene un plan de prácticas
    // Puedes hacer una solicitud HTTP aquí o utilizar otro método
    // Devuelve un Observable<boolean> indicando si ya tiene un plan o no
    // Este método debe adaptarse a tu lógica de identificación de alumno
    // Por ejemplo, puedes pasar el ID del alumno como parámetro en la URL
    return this.http.get<boolean>(`${this.apiUrl}/verificar/${alumnoId}`);
  }


}


