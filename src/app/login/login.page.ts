import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() { }


  logIn(email, senha){
    this.authService.singIn(email.value, senha.value)
    .then((res) => {
      if(this.authService.isEmailCadastrado !== null){
        this.router.navigate(['dashboard']);
      }else{
        window.alert('Email não cadastrado');
        return false;
      }
    })
    .catch((error) => {
      window.alert(error.message);
    });

  }

}
