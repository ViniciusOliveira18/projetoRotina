import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RotinaService } from '../shared/rotina.service';

@Component({
  selector: 'app-edit-rotina',
  templateUrl: './edit-rotina.page.html',
  styleUrls: ['./edit-rotina.page.scss'],
})
export class EditRotinaPage implements OnInit {

  updateRotinaForm: FormGroup;
  id: any;


  constructor(
    private rotService: RotinaService,
    private actRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
    ) {
      this.id = this.actRoute.snapshot.paramMap.get('id');
      this.rotService.getRotina(this.id).valueChanges().subscribe(res => {
        this.updateRotinaForm.setValue(res);
      });
     }

  ngOnInit() {
    this.updateRotinaForm = this.fb.group({
      nome: [''],
      email: [''],
      telefone: [''],
      descricao: [''],
      hora: [''],
      data: [''],
    });
    console.log(this.updateRotinaForm.value);
  }
  updateForm(){
    this.rotService.atualizarRotina(this.id, this.updateRotinaForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }

}
