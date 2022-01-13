import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { FuncionarioBienestarComponent } from './components/funcionario/funcionario-bienestar/funcionario-bienestar.component';
import { FuncionarioRegistroComponent } from './components/funcionario/funcionario-registro/funcionario-registro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginEstudianteComponent } from './components/login-estudiante/login-estudiante.component';
import { LoginFuncionarioComponent } from './components/login-funcionario/login-funcionario.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent,
    pathMatch:"full"
  },
  {
    path:"login/estudiante",
    component: LoginEstudianteComponent,
  },
  {
    path:"login/funcionario",
    component: LoginFuncionarioComponent,
  },
  {
    path:"estudiante",
    component: EstudianteComponent
  },
  {
    path:"funcionario/registro",
    component: FuncionarioRegistroComponent
  },
  {
    path:"funcionario/bienestar",
    component: FuncionarioBienestarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
