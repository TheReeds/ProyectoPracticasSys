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




}


