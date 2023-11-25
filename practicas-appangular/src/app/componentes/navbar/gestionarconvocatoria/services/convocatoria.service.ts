import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {
  private apiUrl = 'http://127.0.0.1:8000/api/v1/convocatorias';
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getConvocatoria(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createConvocatoria(convocatoria: any): Observable<any> {
    return this.http.post(this.apiUrl, convocatoria);
  }

  updateConvocatoria(id: number, convocatoria: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, convocatoria);
  }

  deleteConvocatoria(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
