/* The AppService class in TypeScript is an Angular service that allows switching themes by dynamically
changing the CSS file linked in the document. */
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Hours } from './hours';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  hours: Hours[] = [];
  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(theme: string) {
    let themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = theme + '.css'; // bundle name
    }
  }

  getHours() {
    return Promise.resolve(this.getHoursData());
  }

  getHoursData() {
    return [
      {
        hoursAvailable: '18.0',
        hoursEnd: '3.0',
      },
    ];
  }
}
