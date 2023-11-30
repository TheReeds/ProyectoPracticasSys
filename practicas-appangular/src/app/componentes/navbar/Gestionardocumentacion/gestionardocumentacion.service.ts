import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GestionardocumentacionService {

  private apiUrl = 'http://127.0.0.1:8000/api/solicitudcartas';

  constructor(private http: HttpClient) { }

  getSolicitudesCartas(): Observable<any[]> {
    return this.http.get<any[]>('http://127.0.0.1:8000/api/solicitudcartas');
  }

  getSolicitudCartaPorId(id: number): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:8000/api/solicitudcartas/${id}`);
  }

  crearSolicitudCarta(nuevaSolicitud: any): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/solicitudcartas', nuevaSolicitud);
  }

  actualizarSolicitudCarta(id: number, solicitudActualizada: any): Observable<any> {
    return this.http.put<any>(`http://127.0.0.1:8000/api/solicitudcartas/${id}`, solicitudActualizada);
  }

  eliminarSolicitudCarta(id: number): Observable<any> {
    return this.http.delete<any>(`http://127.0.0.1:8000/api/solicitudcartas/${id}`);
  }
  private apiUrl2 = 'http://127.0.0.1:8000/api';
  getEstudianteInfo(estudianteId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl2}/alumnos/${estudianteId}`);
  }

  private apiUrl3 = 'http://127.0.0.1:8000/api';
  getEmpresaInfo(empresaId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl3}/empresas/${empresaId}`);
  }

}
