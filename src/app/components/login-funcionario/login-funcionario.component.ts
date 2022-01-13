import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-funcionario',
  templateUrl: './login-funcionario.component.html',
  styleUrls: ['./login-funcionario.component.css']
})
export class LoginFuncionarioComponent  {

  constructor( private router:Router ) { }

  username:string = "";
  password:string = "";
  badUser:boolean = false

  login(body:NgForm){
    if (body.value.username === "registro"){
      this.router.navigate(["/funcionario/registro"])
    }
    else if (body.value.username === "bienestar"){
      this.router.navigate(["/funcionario/bienestar"])
    }
  }

}
