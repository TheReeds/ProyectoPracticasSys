import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login/login.component';
import { RegisterComponent } from './componentes/login/register/register.component';
import { InterfazComponent } from './componentes/login/interfaz/interfaz.component';
import { InicioComponent } from './componentes/dashboard/inicio/inicio.component';

const routes: Routes = [
  {path: '', component: InterfazComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'inicio', component: InicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
