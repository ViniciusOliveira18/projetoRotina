import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.page.html',
  styleUrls: ['./meus-dados.page.scss'],
})
export class MeusDadosPage implements OnInit {
  Users = [];

  constructor(private userService: UserService) {
   }

  ngOnInit() {

    this.fetchDadosCadastrais();
    let userRes = this.userService.getListaUsuarios();
    userRes.snapshotChanges().subscribe(res => {
      this.Users = [];
      res.forEach(item => {
        let user = item.payload.toJSON();
        user['$id'] = item.key;
        this.Users.push(user as User);
      });
    });
  }

  fetchDadosCadastrais(){
    this.userService.getListaUsuarios().valueChanges().subscribe(res => {
      console.log(res);
    });
  }
    deletaUsuario(id){
      console.log(id);
      if(window.confirm('Tem certeza que quer deletar essa rotina?')){
        this.userService.deletaUsuario(id);
      };
}
}
