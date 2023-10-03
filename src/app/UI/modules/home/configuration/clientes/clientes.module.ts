import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ListaClientesPageComponent } from './components/pages/lista-clientes-page/lista-clientes-page.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';
import { TableDatosClientesComponent } from './components/organisms/table-datos-clientes/table-datos-clientes.component';
import { RegistroDatosClientesPageComponent } from './components/pages/registro-datos-clientes-page/RegistroDatosClientesPageComponent';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ListaClientesPageComponent,
    TableDatosClientesComponent,
    RegistroDatosClientesPageComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ClientesModule { }
