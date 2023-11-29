import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './componentes/login/services/auth-guard-service.service';

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
import { NavbarEstudianteComponent } from './componentes2/navegador/navbar-estudiante/navbar-estudiante.component';
import { InicioEstudianteComponent } from './componentes2/navegador/inicio-estudiante/inicio-estudiante.component';
import { VerConvocatoriasComponent } from './componentes2/navegador/convocatorias/ver-convocatorias/ver-convocatorias.component';
import { MisConvocatoriasComponent } from './componentes2/navegador/convocatorias/mis-convocatorias/mis-convocatorias.component';
import { CartaPresentacionComponent } from './componentes2/navegador/convocatorias/carta-presentacion/carta-presentacion.component';
import { MisDocumentosComponent } from './componentes2/navegador/mis-documentos/mis-documentos.component';
import { GestionarPlanpracticasComponent } from './componentes2/navegador/gestionar-planpracticas/gestionar-planpracticas.component';
import { InformeProgramadoComponent } from './componentes2/navegador/informes/informe-programado/informe-programado.component';
import { MisInformesComponent } from './componentes2/navegador/informes/mis-informes/mis-informes.component';
import { MisEvaluacionesComponent } from './componentes2/navegador/mis-evaluaciones/mis-evaluaciones.component';
import { ConfiguracionComponent } from './componentes2/navegador/configuracion/configuracion.component';
import { SolicitarEmpresaComponent } from './componentes2/navegador/solicitar-empresa/solicitar-empresa.component';

const routes: Routes = [
  {path: '', component: InterfazComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'navbar', component: NavbarComponent, canActivate: [AuthGuardService] },
  {path: 'inicio', component: InicioComponent, canActivate: [AuthGuardService]},
//GestionarEmpresa
  {path: 'gestion-empresa', component: GestionempresaComponent, canActivate: [AuthGuardService]},
  {path: 'validar-empresa', component: ValidarempresaComponent, canActivate: [AuthGuardService]},
  {path: 'gestionar-especialidad', component: GestionarespecialidadComponent, canActivate: [AuthGuardService]},
  //convocatorias
  {path: 'gestionar-convocatoria', component: GestionarconvocatoriaComponent, canActivate: [AuthGuardService]},
  //gestionardocumentos
  {path: 'solicitudes-carta', component: SolictudescartaComponent, canActivate: [AuthGuardService]},
  {path: 'gestionar-documentacion', component: GestiondocumentosComponent, canActivate: [AuthGuardService]},
  //Gestionarsupervisores
  {path: 'gestion-supervisores', component: GestionsupervisoresComponent, canActivate: [AuthGuardService]},
  {path: 'asignar-supervisores', component: AsignarsupervisoresComponent, canActivate: [AuthGuardService]},
  //Informe consolidado
  {path: 'generar-informeconsolidado', component: GenerarinformeconsolidadoComponent, canActivate: [AuthGuardService]},
  //opciones
  {path: 'opciones', component: OpcionesComponent, canActivate: [AuthGuardService]},


  //NAVBAR ESTUDIANTES
  {path: 'estudiantes/navbar', component: NavbarEstudianteComponent, canActivate: [AuthGuardService]},
  {path: 'estudiantes/inicio', component: InicioEstudianteComponent, canActivate: [AuthGuardService]},
  //solicitarempresa
  {path: 'estudiantes/solicitar-empresa', component: SolicitarEmpresaComponent, canActivate: [AuthGuardService]},
  //convocatorias
  {path: 'estudiantes/ver-convocatorias', component: VerConvocatoriasComponent, canActivate: [AuthGuardService]},
  {path: 'estudiantes/mis-convocatorias', component: MisConvocatoriasComponent, canActivate: [AuthGuardService]},
  {path: 'estudiantes/carta-presentacion', component: CartaPresentacionComponent, canActivate: [AuthGuardService]},
  //docs
  {path: 'estudiantes/mis-documentos', component: MisDocumentosComponent, canActivate: [AuthGuardService]},
  //ppp
  {path: 'estudiantes/gestionar-planpracticas', component: GestionarPlanpracticasComponent, canActivate: [AuthGuardService]},
  //informes
  {path: 'estudiantes/informe-practicas', component: InformeProgramadoComponent, canActivate: [AuthGuardService]},
  {path: 'estudiantes/mis-informes', component: MisInformesComponent, canActivate: [AuthGuardService]},
  //evaluaciones
  {path: 'estudiantes/mis-evaluaciones', component: MisEvaluacionesComponent, canActivate: [AuthGuardService]},
  {path: 'estudiantes/configuracion-estudiante', component: ConfiguracionComponent, canActivate: [AuthGuardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
