
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
