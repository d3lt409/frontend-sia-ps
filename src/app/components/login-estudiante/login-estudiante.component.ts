import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-estudiante',
  templateUrl: './login-estudiante.component.html',
  styleUrls: ['./login-estudiante.component.css']
})
export class LoginEstudianteComponent {

  constructor( private router: Router ) {}

  username:string = ""
  password:string = ""
  badUser:boolean = false
  noData:boolean = false

  loginEstudiate( validar:NgForm ){
    if (validar.value.username === "" || validar.value.password==="" ) {this.noData = true}
    if (validar.value.username === "mafernandezle" && validar.value.password === "123"){
      this.router.navigate(["/estudiante"])
    }else{
      this.badUser = true;
    }
  }
}
