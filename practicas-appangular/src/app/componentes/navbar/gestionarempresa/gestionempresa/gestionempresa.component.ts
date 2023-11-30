import { CommonModule } from '@angular/common';
import {Component} from '@angular/core';
import { NavbarComponent } from '../../navbar.component';
import { Route, Routes } from '@angular/router';
import { ServicioempresaService } from '../servicioempresa.service';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-gestionempresa',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './gestionempresa.component.html',
  styleUrl: './gestionempresa.component.css'
})
export class GestionempresaComponent{

  responseData: any;

  constructor(private apiService: ServicioempresaService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.apiService.getData().subscribe(
      response => { this.responseData = response.data;


        console.log('datos',this.responseData);


      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }

}


