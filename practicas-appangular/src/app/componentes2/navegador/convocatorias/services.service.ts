import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = 'http://127.0.0.1:8000/api/solicitudcartas';

  constructor(private http: HttpClient) { }
  getEmpresas(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/empresas');
  }
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  createSolicitud(solicitudcartas: any): Observable<any> {
    return this.http.post(this.apiUrl, solicitudcartas);
  }

  updateSolicitud(id: number, solicitudcartas: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, solicitudcartas);
  }

  deleteSolicitud(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
