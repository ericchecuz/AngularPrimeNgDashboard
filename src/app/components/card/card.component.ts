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
})
export class CardComponent {
  constructor(private appService: AppService) {}

  date: Date[] | undefined;
  @Input() tipoCard: string | undefined;

  prossimiAppuntamenti: any[] = [
    {
      data: '2024-03-14',
      link: 'http://link-riunione',
      team: 'Activision',
      tipo: 'Reunion',
      iconSeverity: '',
      visible: false,
    },
    {
      data: '2024-05-13',
      link: 'http://link-riunione',
      team: 'Microsfot',
      tipo: 'Course',
      iconSeverity: '',
      visible: false,
    },
    {
      data: '2024-08-13',
      link: 'http://link-riunione',
      team: 'Eric Device',
      progetto: 'Start Project',
      tipo: 'SAL',
      iconSeverity: '',
      visible: false,
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

  iconPositionState: boolean = false;
  iconSeverity: string = '';
  iconSelectedIndex: number = -1; // Inizializzato a -1 per indicare nessuna selezione

  // toggleIconColorAndPosition(appuntamento: any) {
  //   this.iconPositionState = !this.iconPositionState; // Inverti lo stato

  //   if (this.iconPositionState) {
  //     this.iconSeverity = 'danger'; // Se lo stato è true, imposta l'iconSeverity su 'danger'
  //   } else {
  //     this.iconSeverity = ''; // Altrimenti, reimposta l'iconSeverity a una stringa vuota
  //   }
  // }
  toggleIconColorAndPosition(appuntamento: any, index: number) {
    // Se l'appuntamento corrente è già selezionato, deselezionalo
    if (this.iconSelectedIndex === index) {
      this.iconSelectedIndex = -1;
      appuntamento.iconSeverity = '';
    } else {
      // Altrimenti, deseleziona l'appuntamento precedente se ce n'è uno
      if (this.iconSelectedIndex !== -1) {
        this.prossimiAppuntamenti[this.iconSelectedIndex].iconSeverity = '';
      }
      // Seleziona l'appuntamento corrente
      this.iconSelectedIndex = index;
      appuntamento.iconSeverity = 'danger';
    }
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

  // BUTTON OPEN MODAL
  visible: boolean = false;

  showDialog(appuntamento: any) {
    appuntamento.visible = true;
  }
}
