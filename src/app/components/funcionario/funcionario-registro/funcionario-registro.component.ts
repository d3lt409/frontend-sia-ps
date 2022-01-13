import { Component } from '@angular/core';

@Component({
  selector: 'app-funcionario-registro',
  templateUrl: './funcionario-registro.component.html',
  styleUrls: ['./funcionario-registro.component.css']
})
export class FuncionarioRegistroComponent {

  constructor() { }

  mensaje(){
    alert("PBM calculado: Su PBM es de 40")
  }

}
