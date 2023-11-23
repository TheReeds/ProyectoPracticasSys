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
  {path: 'opciones', component: OpcionesComponent},


  //NAVBAR ESTUDIANTES
  {path: 'estudiantes/navbar', component: NavbarEstudianteComponent},
  {path: 'estudiantes/inicio', component: InicioEstudianteComponent},
  //solicitarempresa
  {path: 'estudiantes/solicitar-empresa', component: SolicitarEmpresaComponent},
  //convocatorias
  {path: 'estudiantes/ver-convocatorias', component: VerConvocatoriasComponent},
  {path: 'estudiantes/mis-convocatorias', component: MisConvocatoriasComponent},
  {path: 'estudiantes/carta-presentacion', component: CartaPresentacionComponent},
  //docs
  {path: 'estudiantes/mis-documentos', component: MisDocumentosComponent},
  //ppp
  {path: 'estudiantes/gestionar-planpracticas', component: GestionarPlanpracticasComponent},
  //informes
  {path: 'estudiantes/informe-practicas', component: InformeProgramadoComponent},
  {path: 'estudiantes/mis-informes', component: MisInformesComponent},
  //evaluaciones
  {path: 'estudiantes/mis-evaluaciones', component: MisEvaluacionesComponent},
  {path: 'estudiantes/configuracion-estudiante', component: ConfiguracionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
