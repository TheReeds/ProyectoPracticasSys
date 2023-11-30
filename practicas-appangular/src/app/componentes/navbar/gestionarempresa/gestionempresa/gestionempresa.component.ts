import { CommonModule } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { NavbarComponent } from '../../navbar.component';
import { Route, Router, Routes } from '@angular/router';
import { DialogService, ServicioempresaService } from '../servicioempresa.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-nueva-empresa-form',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule],
  templateUrl: './nueva-empresa-form.component.html',
  styleUrls:['./nueva-empresa-form.component.css'],
  providers: [DialogService],

})

export class NuevaEmpresaFormComponent{

}

export class GestionempresaComponent implements OnInit{

  mostrarForm = false;
  nuevaEmpresa: any ={};
  responseData: any;

  constructor(
    private apiService: ServicioempresaService,
    private router:Router,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  //abrirFormulario(): void{
    //this.mostrarForm = true;
  //}-->

  abrirFormulario(): void {
    this.dialogService.abrirFormulario();
  }

  agregarNuevaEmpresa(): void {
    this.apiService.agregarEmpresa(this.nuevaEmpresa).subscribe(
      (response) => {
        console.log('Empresa agregada con éxito:', response);

        this.nuevaEmpresa = {};
        this.mostrarForm = false;
      },
      (error)=> {
        console.error('Error al agregar empresa:', error);
      }
    );
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


