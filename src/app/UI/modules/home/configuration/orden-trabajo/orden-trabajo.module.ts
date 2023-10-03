import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdenTrabajoRoutingModule } from './orden-trabajo-routing.module';
import { ListaOrdenTrabajoPageComponent } from './components/pages/lista-orden-trabajo-page/lista-orden-trabajo-page.component';

import { TableDatosOrdenTrabajoComponent } from './components/organisms/table-datos-orden-trabajo/table-datos-orden-trabajo.component';
import { RegistroDatosOrdenTrabajoPageComponent } from './components/pages/registro-datos-orden-trabajo-page/registro-datos-orden-trabajo-page.component';


@NgModule({
    imports: [
    CommonModule,
    OrdenTrabajoRoutingModule,
    ListaOrdenTrabajoPageComponent,
    TableDatosOrdenTrabajoComponent,
    RegistroDatosOrdenTrabajoPageComponent
]
})
export class OrdenTrabajoModule { }
