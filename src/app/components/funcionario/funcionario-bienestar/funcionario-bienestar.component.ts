import { Component } from '@angular/core';

@Component({
  selector: 'app-funcionario-bienestar',
  templateUrl: './funcionario-bienestar.component.html',
  styleUrls: ['./funcionario-bienestar.component.css']
})
export class FuncionarioBienestarComponent {

  constructor() { }

  apoyo_validado(){
    alert("Apoyo validado")
  }

}
