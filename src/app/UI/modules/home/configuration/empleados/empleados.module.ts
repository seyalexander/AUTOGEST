import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { ListaEmpleadosPageComponent } from './components/pages/lista-empleados-page/lista-empleados-page.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';
import { TableDatosEmpleadosComponent } from './components/organisms/table-datos-empleados/table-datos-empleados.component';
import { RegistroDatosEmpleadosPageComponent } from './components/pages/registro-datos-empleados-page/registro-datos-empleados-page.component';


@NgModule({
  declarations: [
    ListaEmpleadosPageComponent,
    TableDatosEmpleadosComponent,
    RegistroDatosEmpleadosPageComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    SharedModule
  ]
})
export class EmpleadosModule { }
