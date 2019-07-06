import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import 'rxjs';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private router: Router) {
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.auth
      .signInWithPopup(provider)
      .then(() => this.router.navigate(['home']));
  }

  logout() {
    if (!firebase.auth().currentUser) {
      return;
    }
    this.afAuth.auth.signOut()
      .then(() => this.router.navigate(['auth']));
  }

  getCurrentUser() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().onAuthStateChanged((user) => {
        user ? resolve(user) : reject();
      });
    });
  }

}
