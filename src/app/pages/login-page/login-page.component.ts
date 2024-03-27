
import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private elementRef: ElementRef, private authService: AuthService) { }
  @ViewChild('cardAnimate') cardLogin!: ElementRef;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';


  showLogin = true; // Mostra la vista di login per default

  toggleView() {
    this.showLogin = !this.showLogin;
  }

  handleClick() {
    if (this.showLogin) {
      // Se siamo nella vista di login, cambiamo vista verso la registrazione
      const card = this.cardLogin.nativeElement;
      card.classList.add('signup');
      card.classList.remove('bounce');
      this.toggleView();
    } else {
      // Se siamo già nella vista di registrazione, tentiamo di registrare l'utente
      this.register();
    }
  }

  backLogin() {
    const card = this.cardLogin.nativeElement;
    card.classList.remove('signup');
    this.toggleView();
    card.classList.add('bounce');
  }

  login() {

    if (this.email == '') {
      alert('Please enter email');
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    this.authService.login(this.email, this.password);
    console.log(this.email, this.password);

    this.email = '';
    this.password = '';

  }


  register() {

    if (this.email == '') {
      alert('Please enter email');
      return;
    }

    if (this.password == '') {
      alert('Please enter password');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    this.authService.register(this.email, this.password);
    console.log(this.authService.authOk)
    if (this.authService.authOk == true) {
      this.showLogin = true;
    }

    this.email = '';
    this.password = '';

  }
  ngAfterViewInit(): void {
    const card = this.cardLogin.nativeElement;
    console.log(card);
    setTimeout(() => {
      card.classList.add('animate');

      console.log(this.elementRef.nativeElement);
    }, 1100);
    setTimeout(() => {
      card.classList.add('bounce');
    }, 1600);



  }
}
