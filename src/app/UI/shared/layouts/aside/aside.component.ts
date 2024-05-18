import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonTextIconSidebarComponent } from '../../components/atoms/button-text-icon-sidebar/button-text-icon-sidebar.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.css'],
    standalone: true,
    imports: [NgFor, ButtonTextIconSidebarComponent, RouterLink]
})
export class AsideComponent {
  mainMenu: {
    defaultOptions: Array<any>;
    accessLink: Array<any>;
  } = {
    defaultOptions: [],
    accessLink: [],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Dashboard',
        icon: 'uil uil-estate',
        route: ['/dashboard'],
      },
    ];

    this.mainMenu.accessLink = [
      {
        name: ['Configuración'],
        icon: 'uil uil-document-info',
        route: ['/', 'configuracion']
      },
      {
        name: ['Reportes'],
        icon: 'uil uil-document-info',
        route: ['/', '','']
      },
      {
        name: ['Operaciones'],
        icon: 'uil uil-document-info',
        route: ['/', 'operacion']
      },
    ]
  }


  @Output() abrirComponenteEvent = new EventEmitter<void>();

  abrirComponente(): void {
    this.abrirComponenteEvent.emit();
  }


  @Output() cerrarComponenteEvent = new EventEmitter<void>();
  cerrarComponente(): void {
    this.cerrarComponenteEvent.emit();
  }
}
