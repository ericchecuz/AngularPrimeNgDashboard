
import { Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { Message, MessageService } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [MessageService]
})
export class LoginPageComponent implements OnInit {
  constructor(private elementRef: ElementRef, private authService: AuthService, private messageService: MessageService) { }
  @ViewChild('cardAnimate') cardLogin!: ElementRef;
  email: string = '';
  password: string = '';
  confirmPassword: string = '';


  showLogin = true; // Mostra la vista di login per default



  ngOnInit() {

  }
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
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Insert the E-mail' });
      return;
    }

    if (this.password == '') {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Insert the password' });
      return;
    }

    this.authService.login(this.email, this.password);
    if (this.authService.logOk == false) {
      console.log(this.authService.error + "errore")
      this.messageService.add({ severity: 'error', summary: 'Error', detail: this.authService.error });
      this.showLogin = true;
    }

    this.email = '';
    this.password = '';

  }


  register() {
    const card = this.cardLogin.nativeElement;

    if (this.email == '') {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Insert the E-mail' });
      return;
    }

    if (this.password == '') {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Insert the password' });
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Password do not match' });
      return;
    }

    this.authService.register(this.email, this.password);
    console.log(this.authService.authOk)
    if (this.authService.authOk == true) {
      this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
      card.classList.remove('signup');
      this.showLogin = true;
    }
    if (this.authService.authOk == false) {

      this.messageService.add({ severity: 'error', summary: 'Error', detail: this.authService.error })
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


  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

  addMultiple() {
    this.messageService.addAll([
      { severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
      { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }
    ]);
  }

  clear() {
    this.messageService.clear();
  }
}
