import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/headers/headers.component';
import { FooterComponent } from './components/footer/footer.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { LoginEstudianteComponent } from './components/login-estudiante/login-estudiante.component';
import { LoginFuncionarioComponent } from './components/login-funcionario/login-funcionario.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { FuncionarioRegistroComponent } from './components/funcionario/funcionario-registro/funcionario-registro.component';
import { FuncionarioBienestarComponent } from './components/funcionario/funcionario-bienestar/funcionario-bienestar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FooterComponent,
    EstudianteComponent,
    LoginEstudianteComponent,
    LoginFuncionarioComponent,
    HomeComponent,
    FuncionarioRegistroComponent,
    FuncionarioBienestarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
