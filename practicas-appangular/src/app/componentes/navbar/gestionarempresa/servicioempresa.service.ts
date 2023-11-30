import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { NuevaEmpresaFormComponent } from './gestionempresa.component.ts';



@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  abrirFormulario(): void {
    this.dialog.open(NuevaEmpresaFormComponent, {
      width: '80%', // Puedes ajustar el tamaño según tus necesidades
    });
  }
}


export class ServicioempresaService {

  private apiUrl = 'http://127.0.0.1:8000/api/empresas';

  constructor(private http: HttpClient) { }

  // Método para realizar una solicitud GET a la API
  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Método para realizar una solicitud POST a la API
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  agregarEmpresa(empresa: any): Observable<any> {
    return this.http.post(this.apiUrl, empresa);
  }

  // Agrega otros métodos según tus necesidades (PUT, DELETE, etc.)
}
