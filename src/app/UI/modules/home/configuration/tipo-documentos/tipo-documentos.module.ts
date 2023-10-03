import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoDocumentosRoutingModule } from './tipo-documentos-routing.module';
import { ListaTipoDocumentosPageComponent } from './components/page/lista-tipo-documentos-page/lista-tipo-documentos-page.component';

import { TablaDatosTipoDocumentosComponent } from './components/organisms/tabla-datos-tipo-documentos/tabla-datos-tipo-documentos.component';
import { RegistroDatosTipoDocumentosPageComponent } from './components/page/registro-datos-tipo-documentos-page/registro-datos-tipo-documentos-page.component';


@NgModule({
    imports: [
    CommonModule,
    TipoDocumentosRoutingModule,
    ListaTipoDocumentosPageComponent,
    TablaDatosTipoDocumentosComponent,
    RegistroDatosTipoDocumentosPageComponent
]
})
export class TipoDocumentosModule { }
