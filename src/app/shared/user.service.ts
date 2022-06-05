import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userListRef: AngularFireList<any>;
  userRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  criarUsuario(user: User){
    this.userListRef = this.db.list('/dados-cadastrais');
    return this.userListRef.push({
      cpf: user.cpf,
      idade: user.idade,
      foto: user.foto,
      nome: user.nome,
      endereco: user.endereco,
      email: user.email,
      senha: user.senha
    });
  }

  getUsuario(id: string){
    this.userRef = this.db.object('/dados-cadastrais/' + id);
    return this.userRef;
  }

  getListaUsuarios(){
    this.userListRef = this.db.list('/dados-cadastrais');
    return this.userListRef;
  }

  atualizaUsuario(id, user: User){
    return this.userRef.update({
      cpf: user.cpf,
      idade: user.idade,
      foto: user.foto,
      nome: user.nome,
      endereco: user.endereco,
      email: user.email,
      senha: user.senha
    });
  }

  deletaUsuario(id: string){
    this.userRef = this.db.object('/dados-cadastrais/' + id);
    this.userRef.remove();
  }
}
