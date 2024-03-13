import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Hours } from 'src/app/hours';

@Component({
  selector: 'user-card',
  templateUrl: './user.card.component.html',
  styleUrls: ['./user.card.component.scss'],
})
export class UserCardComponent {
  date: Date[] | undefined;
  hours!: Hours[];

  constructor(private appService: AppService) {}

  value = [
    {
      label: 'Apps',
      color1: '#34d399',
      color2: '#fbbf24',
      value: 25,
      icon: 'pi pi-table',
    },
    {
      label: 'Messages',
      color1: '#fbbf24',
      color2: '#60a5fa',
      value: 15,
      icon: 'pi pi-inbox',
    },
    {
      label: 'Media',
      color1: '#60a5fa',
      color2: '#c084fc',
      value: 20,
      icon: 'pi pi-image',
    },
    {
      label: 'System',
      color1: '#c084fc',
      color2: '#c084fc',
      value: 10,
      icon: 'pi pi-cog',
    },
  ];
  ngOnInit() {
    this.appService.getHours().then((data) => {
      this.hours = data;
    });
  }

  getHoursData(): Promise<Hours[]> {
    return new Promise((resolve) => {
      resolve(this.hours);
    });
  }
}
