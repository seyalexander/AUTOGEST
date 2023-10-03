import { Component, EventEmitter, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonTextIconSidebarComponent } from '../../atoms/button-text-icon-sidebar/button-text-icon-sidebar.component';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-header-configuration',
    templateUrl: './header-configuration.component.html',
    styleUrls: ['./header-configuration.component.css'],
    standalone: true,
    imports: [NgFor, ButtonTextIconSidebarComponent, RouterLink]
})
export class HeaderConfigurationComponent {
  mainMenu: {
    accessLink: Array<any>;
  } = {
    accessLink: [],
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.mainMenu.accessLink = [
      {
        name: 'Básica',
        icon: 'uil uil-document-info',
        subOpciones: [
          {
            name_sub: 'Empresa',
            icon_sub: 'uil uil-document-info',
            route: ['/', 'configuracion', 'empresa']
          },
          // {
          //   name_sub: 'Divisas',
          //   icon_sub: 'uil uil-document-info',
          //   route: ['/', 'empresas']
          // },
          // {
          //   name_sub: 'Impuestos',
          //   icon_sub: 'uil uil-document-info',
          //   route: ['/', 'empresas']
          // },
          // {
          //   name_sub: 'Medios de Pago',
          //   icon_sub: 'uil uil-document-info',
          //   route: ['/', 'empresas']
          // },
          {
            name_sub: 'Orden Trabajo',
            icon_sub: 'uil uil-document-info',
            route: ['/', 'configuracion', 'orden-trabajo']
          },
          {
            name_sub: 'Reparacion',
            icon_sub: 'uil uil-document-info',
            route: ['/', 'configuracion', 'reparacion']
          },
          {
            name_sub: 'Empleados',
            icon_sub: 'uil uil-document-info',
            route: ['/', 'configuracion', 'empleados']
          },
          {
            name_sub: 'Roles usuarios',
            icon_sub: 'uil uil-document-info',
            route: ['/','configuracion', 'rol-usuarios']
          },
          {
            name_sub: 'Usuarios',
            icon_sub: 'uil uil-document-info',
            route: ['/','configuracion', 'usuarios']
          },
        ],

      },
      {
        name: 'Avanzada',
        icon: 'uil uil-document-info',
        subOpciones: [
          {
            name_sub: 'Diferenciadores',
            icon_sub: 'uil uil-document-info',
            route: ['/', 'empresas']
          },
          // {
          //   name_sub: 'Sub Diferenciadores',
          //   icon_sub: 'uil uil-document-info',
          //   route: ['/', 'empresas']
          // },
          // {
          //   name_sub: ' Sub Clasificadores',
          //   icon_sub: 'uil uil-document-info',
          //   route: ['/', 'empresas']
          // },
          // {
          //   name_sub: ' Sub Modificadores',
          //   icon_sub: 'uil uil-document-info',
          //   route: ['/', 'empresas']
          // },
          // {
          //   name_sub: 'Packs',
          //   icon_sub: 'uil uil-document-info',
          //   route: ['/', 'empresas']
          // }
        ],

      },
      {
        name: 'Utilidades',
        icon: 'uil uil-document-info',
        subOpciones: [
          {
            name_sub: 'Marca Autos',
            icon_sub: 'uil uil-car',
            route: ['/','configuracion','marca-autos']
          },
          {
            name_sub: 'Modelo Autos',
            icon_sub: 'uil uil-car',
            route: ['/','configuracion','modelo-autos']
          },
          {
            name_sub: 'Autos',
            icon_sub: 'uil uil-car',
            route: ['/','configuracion','autos']
          },
        ],

      },
      {
        name: 'Otros',
        icon: 'uil uil-document-info',
        subOpciones: [
          {
            name_sub: 'Clientes',
            icon_sub: 'uil uil-user',
            route: ['/','configuracion','MostrarCliente']
          },
          {
            name_sub: 'Tipo documentos',
            icon_sub: 'uil uil-user',
            route: ['/','configuracion','tipo-documentos']
          },
        ],

      },
    ]
  }


  showMenuPrincipal: boolean = false;
  toggleModal(): void {
    this.showMenuPrincipal == !this.showMenuPrincipal;
  }


  @Output() cerrarComponenteEvent = new EventEmitter<void>();
  cerrarComponente(): void {
    this.cerrarComponenteEvent.emit();
  }
}
