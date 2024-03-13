import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  date: Date[] | undefined;
  @Input() tipoCard: string | undefined;

  prossimiAppuntamenti: any[] = [
    {
      data: '2024-03-13',
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
}
