import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login/login.component';
import { RegisterComponent } from './componentes/login/register/register.component';
import { InterfazComponent } from './componentes/login/interfaz/interfaz.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/navbar/inicio/inicio.component';
import { GestionempresaComponent } from './componentes/navbar/gestionarempresa/gestionempresa/gestionempresa.component';
import { ValidarempresaComponent } from './componentes/navbar/gestionarempresa/validarempresa/validarempresa.component';
import { GestionarespecialidadComponent } from './componentes/navbar/gestionarempresa/gestionarespecialidad/gestionarespecialidad.component';
import { GestionarconvocatoriaComponent } from './componentes/navbar/gestionarconvocatoria/gestionarconvocatoria.component';
import { GestiondocumentosComponent } from './componentes/navbar/Gestionardocumentacion/gestiondocumentos/gestiondocumentos.component';
import { SolictudescartaComponent } from './componentes/navbar/Gestionardocumentacion/solictudescarta/solictudescarta.component';
import { GestionsupervisoresComponent } from './componentes/navbar/gestionarsupervisores/gestionsupervisores/gestionsupervisores.component';
import { AsignarsupervisoresComponent } from './componentes/navbar/gestionarsupervisores/asignarsupervisores/asignarsupervisores.component';
import { GenerarinformeconsolidadoComponent } from './componentes/navbar/generarinformeconsolidado/generarinformeconsolidado.component';
import { OpcionesComponent } from './componentes/navbar/opciones/opciones.component';

const routes: Routes = [
  {path: '', component: InterfazComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'inicio', component: InicioComponent},
//GestionarEmpresa
  {path: 'gestion-empresa', component: GestionempresaComponent},
  {path: 'validar-empresa', component: ValidarempresaComponent},
  {path: 'gestionar-especialidad', component: GestionarespecialidadComponent},
  //convocatorias
  {path: 'gestionar-convocatoria', component: GestionarconvocatoriaComponent},
  //gestionardocumentos
  {path: 'solicitudes-carta', component: SolictudescartaComponent},
  {path: 'gestionar-documentacion', component: GestiondocumentosComponent},
  //Gestionarsupervisores
  {path: 'gestion-supervisores', component: GestionsupervisoresComponent},
  {path: 'asignar-supervisores', component: AsignarsupervisoresComponent},
  //Informe consolidado
  {path: 'generar-informeconsolidado', component: GenerarinformeconsolidadoComponent},
  //opciones
  {path: 'opciones', component: OpcionesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
