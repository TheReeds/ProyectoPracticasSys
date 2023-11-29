import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar.component';
import { GestionardocumentacionService } from '../gestionardocumentacion.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-solictudescarta',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './solictudescarta.component.html',
  styleUrl: './solictudescarta.component.css'
})
export class SolictudescartaComponent implements OnInit {

  solicitudes: any[] = []; // Aquí almacenarás las solicitudes obtenidas del servicio

  constructor(private GestionardocumentacionService: GestionardocumentacionService) { }

  ngOnInit(): void {
    this.obtenerSolicitudes();
  }

  obtenerSolicitudes(): void {
    this.GestionardocumentacionService.getSolicitudesCartas().subscribe(
      data => {
        this.solicitudes = data;
        this.obtenerNombresEstudiantes();
      },
      error => {
        console.error('Error al obtener solicitudes:', error);
      }
    );
  }

  obtenerNombresEstudiantes(): void {
    const solicitudesConNombres = this.solicitudes.map(solicitud => {
      return this.GestionardocumentacionService.getEstudianteInfo(solicitud.estudiante_id);
    });

    forkJoin(solicitudesConNombres).subscribe(
      nombresEstudiantes => {
        this.solicitudes.forEach((solicitud, index) => {
          solicitud.nombreEstudiante = nombresEstudiantes[index].nombre;
        });

        // Una vez que se han obtenido los nombres de los estudiantes, obtener los nombres de las empresas.
        this.obtenerNombresEmpresas();
      },
      error => {
        console.error('Error al obtener nombres de estudiantes:', error);
      }
    );
  }

  obtenerNombresEmpresas(): void {
    const solicitudesConNombresEmpresas = this.solicitudes.map(solicitud => {
      return this.GestionardocumentacionService.getEmpresaInfo(solicitud.empresa_id);
    });

    forkJoin(solicitudesConNombresEmpresas).subscribe(
      nombresEmpresas => {
        this.solicitudes.forEach((solicitud, index) => {
          const empresa = nombresEmpresas[index].data; // Accede al objeto 'data' de la respuesta
          solicitud.nombreEmpresa = empresa.razonsocial;
          solicitud.direccionEmpresa = empresa.direccion; // Puedes agregar más propiedades según sea necesario
          solicitud.emailEmpresa = empresa.email;
          // ... agrega más propiedades según tus necesidades
        });
      },
      error => {
        console.error('Error al obtener nombres de empresas:', error);
      }
    );
  }

}
