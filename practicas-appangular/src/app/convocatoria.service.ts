import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Convocatoria } from './componentes/navbar/convocatoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {

  private baseUrl = 'http://127.0.0.1:8000/api/convocatorias '; // Reemplaza con la URL correcta de tu API

  constructor(private http: HttpClient) {}

  obtenerConvocatorias(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  obtenerConvocatoriaPorId(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  crearConvocatoria(convocatoria: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, convocatoria);
  }

  actualizarConvocatoria(id: number, convocatoria: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, convocatoria);
  }

  borrarConvocatoria(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
