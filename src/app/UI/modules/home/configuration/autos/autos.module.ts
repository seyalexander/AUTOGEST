import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutosRoutingModule } from './autos-routing.module';
import { ListaAutosPageComponent } from './components/page/lista-autos-page/lista-autos-page.component';

import { TableDatosAutosComponent } from './components/organisms/table-datos-autos/table-datos-autos.component';
import { RegistroDatosAutosPageComponent } from './components/page/registro-datos-autos-page/registro-datos-autos-page.component';


@NgModule({
    imports: [
    CommonModule,
    AutosRoutingModule,
    ListaAutosPageComponent,
    TableDatosAutosComponent,
    RegistroDatosAutosPageComponent
]
})
export class AutosModule { }
