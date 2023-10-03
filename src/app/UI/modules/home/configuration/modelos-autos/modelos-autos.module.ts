import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelosAutosRoutingModule } from './modelos-autos-routing.module';
import { ListaModeloAutosPageComponent } from './components/page/lista-modelo-autos-page/lista-modelo-autos-page.component';

import { TablaDatosModelosAutosComponent } from './components/organisms/tabla-datos-modelos-autos/tabla-datos-modelos-autos.component';
import { RegistroDatosModeloAutosPageComponent } from './components/page/registro-datos-modelo-autos-page/registro-datos-modelo-autos-page.component';



@NgModule({
    imports: [
    CommonModule,
    ModelosAutosRoutingModule,
    ListaModeloAutosPageComponent,
    TablaDatosModelosAutosComponent,
    RegistroDatosModeloAutosPageComponent
]
})
export class ModelosAutosModule { }
