import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasAutosRoutingModule } from './marcas-autos-routing.module';
import { ListaMarcaAutosPageComponent } from './components/pages/lista-marca-autos-page/lista-marca-autos-page.component';
import { SharedModule } from 'src/app/UI/shared/shared.module';
import { TableDatosMarcasAutosComponent } from './components/organisms/table-datos-marcas-autos/table-datos-marcas-autos.component';
import { RegistroDatosMarcasAutosComponent } from './components/pages/registro-datos-marcas-autos/registro-datos-marcas-autos.component';


@NgModule({
  declarations: [
    ListaMarcaAutosPageComponent,
    TableDatosMarcasAutosComponent,
    RegistroDatosMarcasAutosComponent
  ],
  imports: [
    CommonModule,
    MarcasAutosRoutingModule,
    SharedModule
  ]
})
export class MarcasAutosModule { }
