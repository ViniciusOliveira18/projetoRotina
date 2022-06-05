import { Component, OnInit } from '@angular/core';
import { Rotina } from '../shared/rotina';
import { RotinaService } from '../shared/rotina.service';

@Component({
  selector: 'app-minhas-rotinas',
  templateUrl: './minhas-rotinas.page.html',
  styleUrls: ['./minhas-rotinas.page.scss'],
})
export class MinhasRotinasPage implements OnInit {
  Rotinas = [];

  constructor(private rotService: RotinaService) { }

  ngOnInit() {

    this.fetchRotinas();
    let rotinaRes = this.rotService.getListaRotinas();
    rotinaRes.snapshotChanges().subscribe(res => {
      this.Rotinas = [];
      res.forEach(item => {
        let rotina = item.payload.toJSON();
        rotina['$id'] = item.key;
        this.Rotinas.push(rotina as Rotina);
      });
    });
  }

  fetchRotinas(){
    this.rotService.getListaRotinas().valueChanges().subscribe(res => {
      console.log(res);
    });
  }

  deletaRotina(id){
    console.log(id);
    if(window.confirm('Tem certeza que quer deletar essa rotina?')){
      this.rotService.deletaRotina(id);
    };
  }
}
