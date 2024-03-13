import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  // animations: [
  //   trigger('changeTextVisibility', [
  //     state('show', style({ opacity: 1 })),
  //     state('hide', style({ opacity: 0 })),
  //     transition('show => hide', animate('0.5s ease')),
  //     transition('hide => show', animate('0.5s ease')),
  //   ]),
  // ],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  isTextVisible: boolean = true;
  @ViewChild('containerMenu') containerMenu!: ElementRef;
  constructor(private appService: AppService, private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.checkContainerSize(); // Controlla la dimensione iniziale del container
    const mutationObserver = new MutationObserver(() => {
      this.checkContainerSize(); // Controlla la dimensione del container ad ogni mutazione
    });
    mutationObserver.observe(this.containerMenu.nativeElement, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }
  showText: boolean = true;
  containerMenuStyle: any = {};

  // Metodo per verificare la dimensione del container e aggiornare lo stato di espansione
  checkContainerSize() {
    const containerMenuWidth = this.containerMenu.nativeElement.offsetWidth;
    console.log(this.containerMenu);
    console.log(containerMenuWidth);
    if (containerMenuWidth < 126) {
      // Nascondi i label dei bottoni
      this.showText = false; // Usa l'operatore di assegnazione (=) invece di (==)
      console.log(this.showText);
    }
    if (containerMenuWidth >= 127) {
      console.log(this.showText);
      this.showText = true; // Usa l'operatore di assegnazione (=) invece di (==)
    }
  }

  ngOnInit() {
    setTimeout(() => {
      this.checkContainerSize();
    }, 0);
  }
}
