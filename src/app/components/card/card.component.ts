import { Component, Input } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('moveIcon', [
      state(
        'left',
        style({
          transform: 'rotateY(0deg)',
        })
      ),
      state(
        'right',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      transition('left <=> right', animate('0.5s ease-in-out')),
    ]),
  ],
})
export class CardComponent {
  constructor(private appService: AppService) {}

  date: Date[] | undefined;
  @Input() tipoCard: string | undefined;

  prossimiAppuntamenti: any[] = [
    {
      data: '2024-03-14',
      link: 'http://link-riunione',
      progetto: 'Nome Progetto',
      tipo: 'Reunion',
    },
    {
      data: '2024-05-13',
      link: 'http://link-riunione',
      progetto: 'Nome Progetto',
      tipo: 'Course',
    },
    {
      data: '2024-08-13',
      link: 'http://link-riunione',
      progetto: 'Nome Progetto',
      tipo: 'SAL',
    },
    // Altri appuntamenti...
  ];

  apriModal(appuntamento: any) {
    // Logica per aprire il modal con le informazioni dell'appuntamento
    console.log(appuntamento);
  }

  isToday(date: string): boolean {
    const today = new Date();
    const appuntamentoDate = new Date(date);
    return (
      appuntamentoDate.getFullYear() === today.getFullYear() &&
      appuntamentoDate.getMonth() === today.getMonth() &&
      appuntamentoDate.getDate() === today.getDate()
    );
  }

  themes = [
    {
      id: 'lara-light-blue',
      label: 'Lara Light Blue',
    },
    {
      id: 'luna-green',
      label: 'Luna Green',
    },
    {
      id: 'bootstrap4-dark-blue',
      label: 'Bootstrap 4 Dark Blue',
    },
  ];

  selectedTheme: { id: string; label: string } = this.themes[0];
  themesIcon = [
    { id: 1, name: 'Light', icon: 'pi-bell' },
    { id: 2, name: 'Dark', icon: 'pi-bell ' },
  ];
  selectedThemeIcon = this.themesIcon[0];
  iconPositionState: string = 'left';
  iconSeverity: string = '';

  toggleIconColorAndPosition() {
    if (this.iconPositionState === 'left') {
      this.iconSeverity = 'danger';
    } else {
      this.iconSeverity = '';
    }

    this.iconPositionState =
      this.iconPositionState === 'left' ? 'right' : 'left';
  }
  changeTheme(themeId: string) {
    console.log(themeId);
    this.appService.switchTheme(themeId);
  }

  tooltipOptions = {
    showDelay: 150,
    autoHide: false,
    tooltipEvent: 'hover',
    tooltipPosition: 'left',
  };
}
