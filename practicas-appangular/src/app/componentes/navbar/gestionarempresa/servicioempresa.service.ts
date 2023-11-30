import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioempresaService {

  private apiUrl = 'http://127.0.0.1:8000/api/empresas';
  private apiUrlE = 'http://127.0.0.1:8000/api/especialidades';

  constructor(private http: HttpClient) { }

  // Método para realizar una solicitud GET a la API
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getDataEspecialidades(): Observable<any> {
    return this.http.get<any>(this.apiUrlE);
  }

  // Método para realizar una solicitud POST a la API
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
  postDataEspecialidad(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrlE, data);
  }

  deleteEmpresa(empresaId: number): Observable<any> {
    const url = `${this.apiUrl}/${empresaId}`;
    return this.http.delete<any>(url);
  }
  deleteEspecialidad(especialidadId: number): Observable<any> {
    const url = `${this.apiUrlE}/${especialidadId}`;
    return this.http.delete<any>(url);
  }
  getEmpresaById(empresaId: number): Observable<any> {
    const url = `${this.apiUrl}/${empresaId}`;
    return this.http.get<any>(url);
  }

  // Agrega un nuevo método para actualizar los datos de la empresa
  updateEmpresa(empresaId: number, newData: any): Observable<any> {
    const url = `${this.apiUrl}/${empresaId}`;
    return this.http.put<any>(url, newData);
  }
  // Agrega otros métodos según tus necesidades (PUT, DELETE, etc.)

}
