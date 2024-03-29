import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authOk: boolean | undefined;
  error: string = "";
  logOk: boolean | undefined;

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  // login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(res => {
      localStorage.setItem('token', 'true');

      // if (res.user?.emailVerified == true) {
      this.logOk = true;
      this.router.navigate(['home']);
      console.log("login OK ")
      // }

    }, err => {
      this.logOk = false;
      this.error = err.message;
      console.log(this.error + "error")

      this.router.navigate(['/login']);
    })
  }

  // register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(res => {
      this.authOk = true;
      // this.sendEmailForVarification(res.user);
    }, err => {
      this.authOk = false;
      this.error = err.message;
      console.log(this.error + "error")

      this.router.navigate(['/login']);
    })
  }

  getCurrentUserId() {
    return this.fireauth.currentUser.then(user => user ? user.uid : null);
  }

  // Nuovo metodo per ottenere l'utente corrente come Observable
  getCurrentUser(): Observable<any> {
    return this.fireauth.authState.pipe(
      switchMap(user => {
        if (user) {
          // L'utente è loggato, restituiamo un observable dell'utente
          return of(user);
        } else {
          // Nessun utente loggato, restituiamo un observable di null
          return of(null);
        }
      })
    );
  }


  // sign out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

  // forgot password
  forgotPassword(email: string) {
    this.fireauth.sendPasswordResetEmail(email).then(() => {
      this.router.navigate(['/varify-email']);
    }, err => {
      alert('Something went wrong');
    })
  }

  // email varification
  sendEmailForVarification(user: any) {
    console.log(user);
    user.sendEmailVerification().then((res: any) => {
      this.router.navigate(['/varify-email']);
    }, (err: any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

  //sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/dashboard']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }
}



