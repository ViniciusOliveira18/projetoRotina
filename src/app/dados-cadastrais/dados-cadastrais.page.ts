import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.page.html',
  styleUrls: ['./dados-cadastrais.page.scss'],
})
export class DadosCadastraisPage implements OnInit {

  dadosForm: FormGroup;

  constructor(
    public authService: AuthenticationService,
    private userService: UserService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.dadosForm = this.fb.group({
      cpf: [''],
      idade: [''],
      foto: [''],
      nome: [''],
      endereco: [''],
      email: [''],
      senha: [''],
    });
  }

  formSubmit(){
    if(!this.dadosForm.valid){
      return false;
    }else{
      this.userService.criarUsuario(this.dadosForm.value).then(res => {
        console.log(res);
        this.dadosForm.reset();
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error)
      );
    }
  }

  signUp(email, senha){
    this.authService.cadastrarUsuario(email.value, senha.value).then(() => {
      this.router.navigate(['login']);
    }).catch((error) => {
      window.alert('Erro ao tentar cadastrar usuario');
    });
  }
}
