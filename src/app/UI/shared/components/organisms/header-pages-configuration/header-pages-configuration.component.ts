import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header-pages-configuration',
  templateUrl: './header-pages-configuration.component.html',
  styleUrls: ['./header-pages-configuration.component.css']
})
export class HeaderPagesConfigurationComponent {

  src: String = ''

  @Output() cerrarComponenteEvent = new EventEmitter<void>();
  @Output() callBackData: EventEmitter<any> = new EventEmitter;

  cerrarComponente(): void {
    this.cerrarComponenteEvent.emit();
  }

  @Input() nombrePagina: String = '';

  callSearch(term: String): void {
    if (term.length >= 3) {
      this.callBackData.emit(term);
    }
  }
}
