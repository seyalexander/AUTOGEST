import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { tipoDocumentosModel } from 'src/app/domain/models/tipo-documentos/tipo-documentos.model';
import { GetTipoDocumentoUseCases } from 'src/app/domain/useCase/get-tipo-documentos-use-case';
import { TablaDatosTipoDocumentosComponent } from '../../organisms/tabla-datos-tipo-documentos/tabla-datos-tipo-documentos.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';

@Component({
    selector: 'app-lista-tipo-documentos-page',
    templateUrl: './lista-tipo-documentos-page.component.html',
    styleUrls: ['./lista-tipo-documentos-page.component.css'],
    standalone: true,
    imports: [HeaderPagesConfigurationComponent, TablaDatosTipoDocumentosComponent]
})
export class ListaTipoDocumentosPageComponent {
  nombrePagina: String = 'TIPO DOCUMENTO'

  datosTipoDocumentolista: Array <tipoDocumentosModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getTipoDocumentoUseCase: GetTipoDocumentoUseCases) {}


  ngOnInit():  void {

    const ObservarDatosModeloAutos$ = this._getTipoDocumentoUseCase.getAllTipoDocumento().
    subscribe( Response => {
        this.datosTipoDocumentolista = Response;
      })

    this.listObservers$ = [ObservarDatosModeloAutos$]

  }
}
