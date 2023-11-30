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

  solicitudes: any[] = [];
  solicitudSeleccionada: any | null = null;

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

  eliminarSolicitud(solicitud: any): void {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar esta solicitud?');

    if (confirmacion) {
      // Lógica para eliminar la solicitud, por ejemplo, utilizando el servicio
      this.GestionardocumentacionService.eliminarSolicitudCarta(solicitud.id).subscribe(
        () => {
          // Eliminación exitosa, actualiza la lista de solicitudes
          this.obtenerSolicitudes();
        },
        error => {
          console.error('Error al eliminar la solicitud:', error);
        }
      );
    }
  }

  buscarEstudiantes(event: Event): void {
    const termino = (event.target as HTMLInputElement)?.value;
    if (termino.trim() !== '') {
      // Filtra las solicitudes que coinciden con el término de búsqueda
      this.solicitudes = this.solicitudes.filter(solicitud =>
        solicitud.nombreEstudiante.toLowerCase().includes(termino.toLowerCase())
      );
    } else {
      // Si el término de búsqueda está vacío, vuelve a cargar todas las solicitudes
      this.obtenerSolicitudes();
    }
  }

  mostrarDetalles(solicitud: any): void {
    this.solicitudSeleccionada = solicitud;
  }

  cerrarDetalles(): void {
    this.solicitudSeleccionada = null;
  }

}
