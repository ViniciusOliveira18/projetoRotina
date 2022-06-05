import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  dadosUsuarios: any;

  constructor(public afStore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone)
     {
      this.ngFireAuth.authState.subscribe((user) => {
        if(user){
          this.dadosUsuarios = user;
          localStorage.setItem('user', JSON.stringify(this.dadosUsuarios));
          JSON.parse(localStorage.getItem('user'));
         } else{
            localStorage.setItem('user', null);
            JSON.parse(localStorage.getItem('user'));
          }
        });

      }

    singIn(email, senha){
      return this.ngFireAuth.signInWithEmailAndPassword(email,senha);
    }

    cadastrarUsuario(email, senha){
      return this.ngFireAuth.createUserWithEmailAndPassword(email, senha);
    }

    // eslint-disable-next-line @typescript-eslint/member-ordering
    get isEmailCadastrado(): boolean{
      const user = JSON.parse(localStorage.getItem('user'));
      return user.email !== null ? true: false;
    }

    authLogin(provider) {
      return this.ngFireAuth
        .signInWithPopup(provider)
        .then((result) => {
          this.ngZone.run(() => {
            this.router.navigate(['dashboard']);
          });
          this.setDadosUsuarios(result.user);
        })
        .catch((error) => {
          window.alert(error);
        });
    }

    setDadosUsuarios(user) {
      const userRef: AngularFirestoreDocument<any> = this.afStore.doc(
        `users/${user.id}`
      );
      const dadoUser: User = {
        $id: user.id,
        cpf: user.cpf,
        idade: user.idade,
        foto: user.foto,
        nome: user.nome,
        endereco: user.endereco,
        email: user.email,
        senha: user.senha,
      };
      return userRef.set(dadoUser, {
        merge: true,
      });
    }

    signOut() {
      return this.ngFireAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['home']);
      });
    }

}
