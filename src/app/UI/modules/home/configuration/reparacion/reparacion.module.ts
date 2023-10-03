import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReparacionRoutingModule } from './reparacion-routing.module';
import { ListaReparacionPageComponent } from './components/pages/lista-reparacion-page/lista-reparacion-page.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';
import { TableDatosReparacionComponent } from './components/organisms/table-datos-reparacion/table-datos-reparacion.component';
import { RegistroDatosReparacionPageComponent } from './components/pages/registro-datos-reparacion-page/registro-datos-reparacion-page.component';


@NgModule({
  declarations: [
    ListaReparacionPageComponent,
    TableDatosReparacionComponent,
    RegistroDatosReparacionPageComponent
  ],
  imports: [
    CommonModule,
    ReparacionRoutingModule,
    SharedModule
  ]
})
export class ReparacionModule { }
