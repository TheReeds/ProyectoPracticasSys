import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConvocatoriaService {
  private apiUrl = 'http://127.0.0.1:8000/api/convocatorias';
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    // Hacer la llamada al API para obtener las convocatorias y las empresas
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        return {
          convocatorias: response.data,
          empresas: response.empresas,
        };
      })
    );
  }
  getEmpresas(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/empresas');
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
  private modalState = new BehaviorSubject<boolean>(false);
  modalState$ = this.modalState.asObservable();

  openModal() {
    this.modalState.next(true);
  }

  closeModal() {
    this.modalState.next(false);
  }

  private eliminarModalState = new BehaviorSubject<boolean>(false);
  eliminarModalState$ = this.eliminarModalState.asObservable();

  openEliminarModal() {
    this.eliminarModalState.next(true);
  }

  closeEliminarModal() {
    this.eliminarModalState.next(false);
  }



}
