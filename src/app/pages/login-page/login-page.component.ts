
import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private elementRef: ElementRef) { }
  @ViewChild('cardAnimate') cardLogin!: ElementRef;
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
