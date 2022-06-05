import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Rotina } from './rotina';

@Injectable({
  providedIn: 'root'
})
export class RotinaService {

  rotinaListRef: AngularFireList<any>;
  rotinaRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  criarRotina(rot: Rotina){

    this.rotinaListRef = this.db.list('/rotina');

    return this.rotinaListRef.push({
      nome: rot.nome,
      email: rot.email,
      telefone: rot.telefone,
      descricao: rot.descricao,
      hora: rot.hora,
      data: rot.data,
    });
  }

  getRotina(id: string){
    this.rotinaRef = this.db.object('/rotina/' + id);
    return this.rotinaRef;
  }

  getListaRotinas(){
    this.rotinaListRef = this.db.list('/rotina');
    return this.rotinaListRef;
  }

  atualizarRotina(id, rot: Rotina){
    return this.rotinaRef.update({
      nome: rot.nome,
      email: rot.email,
      telefone: rot.telefone,
      descricao: rot.descricao,
      hora: rot.hora,
      data: rot.data,
    });
  }

  deletaRotina(id: string){
    this.rotinaRef = this.db.object('/rotina/' + id);
    this.rotinaRef.remove();
  }

}
