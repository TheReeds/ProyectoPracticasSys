import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioempresaService {

  private apiUrl = 'http://127.0.0.1:8000/api/empresas.';

  constructor(private http: HttpClient) { }

  // Método para realizar una solicitud GET a la API
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para realizar una solicitud POST a la API
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // Agrega otros métodos según tus necesidades (PUT, DELETE, etc.)

}
