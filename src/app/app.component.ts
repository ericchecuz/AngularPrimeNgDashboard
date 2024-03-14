import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  AfterViewInit,
  OnInit,
  ViewChild,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { AppService } from './app.service';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import {
  SplitterResizeEndEvent,
  SplitterResizeStartEvent,
} from 'primeng/splitter/public_api';
import { TooltipOptions } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('changeIcon', [
      state(
        'pi-sun',
        style({
          transform: 'rotateY(0deg)',
        })
      ),
      state(
        'pi-moon',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      transition('* => *', animate('0.5s ease')),
    ]),
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private appService: AppService, private elementRef: ElementRef) {}
  @ViewChildren('containerButton') containerButton!: QueryList<ElementRef>;
  @ViewChild('containerMenu') containerMenu!: ElementRef;
  showLabel: boolean = true;

  // Metodo per nascondere il testo del pulsante
  hideLabel() {
    this.showLabel = false;
  }
  ngAfterViewInit() {
    // Ottieni l'elemento nativo
    const nativeElement = this.elementRef.nativeElement;

    // Crea un nuovo MutationObserver
    const mutationObserver = new MutationObserver((mutations) => {
      // Esegui la funzione checkContainerSize() ogni volta che viene rilevata una mutazione
      this.checkContainerSize();
    });

    // Configura e inizia ad osservare le mutazioni nel contenuto dell'elemento nativo
    const observerConfig = {
      attributes: true,
      childList: true,
      subtree: true,
    };
    mutationObserver.observe(nativeElement, observerConfig);
  }

  showText: boolean = false;
  containerMenuStyle: any = {};

  // Metodo per verificare la dimensione del container e aggiornare lo stato di espansione
  checkContainerSize() {
    this.containerButton.forEach((button) => {
      // Ottieni l'elemento nativo per ogni pulsante
      const nativeButtonElement = button.nativeElement;

      // Controllo se la larghezza del menu è inferiore a 126
      const containerMenuWidth = this.containerMenu.nativeElement.offsetWidth;
      if (containerMenuWidth < 100) {
        // Verifica se la classe è già stata aggiunta per evitare il loop
        if (!nativeButtonElement.classList.contains('opacity-class')) {
          // Aggiungi la classe solo se non è già presente
          console.log('add');
          nativeButtonElement.classList.remove('fadein-class');
          nativeButtonElement.classList.add('opacity-class');
        }
        // Nascondi i label dei bottoni
        console.log('Hide text');
      }
      if (containerMenuWidth >= 100) {
        // Rimuovi la classe solo se è presente e la larghezza è maggiore o uguale a 126
        if (nativeButtonElement.classList.contains('opacity-class')) {
          nativeButtonElement.classList.remove('opacity-class');
          nativeButtonElement.classList.add('fadein-class');
        }
        // Mostra i label dei bottoni
        console.log('Show text');
      }
    });
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.checkContainerSize();
    // }, 0);
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
  sidebarVisible: boolean = true;
  date: Date = new Date();
  selectedTheme: { id: string; label: string } = this.themes[0];
  themesIcon = [
    { id: 1, name: 'Light', icon: 'pi-moon' },
    { id: 2, name: 'Dark', icon: 'pi-sun' },
  ];
  selectedThemeIcon = this.themesIcon[0];
  toggleTheme() {
    if (this.selectedThemeIcon.id === 1) {
      this.selectedTheme = this.themes[1]; // Cambia al tema Dark
      this.selectedThemeIcon = this.themesIcon[1]; // Cambia all'icona pi-moon
    } else {
      this.selectedTheme = this.themes[0]; // Cambia al tema Light
      this.selectedThemeIcon = this.themesIcon[0]; // Cambia all'icona pi-sun
    }
    this.changeTheme(this.selectedTheme.id); // Applica il nuovo tema
  }
  changeTheme(themeId: string) {
    console.log(themeId);
    this.appService.switchTheme(themeId);
  }

  tooltipOptions: TooltipOptions = {
    showDelay: 150,
    hideDelay: 50,
    tooltipEvent: 'hover',
    tooltipPosition: 'bottom',
    tooltipStyleClass: 'custom-tooltip',
  };
}
