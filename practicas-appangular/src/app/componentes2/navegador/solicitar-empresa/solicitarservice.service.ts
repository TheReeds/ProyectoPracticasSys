import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitarserviceService {
  private apiUrl = 'http://127.0.0.1:8000/api/nuevasempresas';

  constructor(private http: HttpClient) { }

  getNuevasEmpresas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getNuevaEmpresa(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createNuevaEmpresa(nuevaEmpresa: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, nuevaEmpresa);
  }

  updateNuevaEmpresa(id: number, nuevaEmpresa: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, nuevaEmpresa);
  }

  deleteNuevaEmpresa(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
