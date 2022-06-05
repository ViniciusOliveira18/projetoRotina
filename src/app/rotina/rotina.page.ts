import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RotinaService } from '../shared/rotina.service';

@Component({
  selector: 'app-rotina',
  templateUrl: './rotina.page.html',
  styleUrls: ['./rotina.page.scss'],
})
export class RotinaPage implements OnInit {

  rotinaForm: FormGroup;

  constructor(
    private rotService: RotinaService,
    private router: Router,
    public fb: FormBuilder
    ) { }

  ngOnInit() {
    this.rotinaForm = this.fb.group({
      nome: [''],
      email: [''],
      telefone: [''],
      descricao: [''],
      hora: [''],
      data: [''],
    });
  }

  formSubmit(){
    if(!this.rotinaForm.valid){
      return false;
    }else{
      this.rotService.criarRotina(this.rotinaForm.value).then(res => {
        console.log(res);
        this.rotinaForm.reset();
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error)
      );
    }
  }

}
