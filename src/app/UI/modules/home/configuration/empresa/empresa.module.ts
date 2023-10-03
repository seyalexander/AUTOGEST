import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaRoutingModule } from './empresa-routing.module';
import { ListaDatosEmpresaComponent } from './components/pages/lista-datos-empresa/lista-datos-empresa.component';


@NgModule({
  declarations: [
    ListaDatosEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
