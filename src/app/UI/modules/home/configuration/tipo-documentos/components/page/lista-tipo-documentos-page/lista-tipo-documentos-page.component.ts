import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { tipoDocumentosModel } from 'src/app/domain/models/tipo-documentos/tipo-documentos.model';
import { GetTipoDocumentoUseCases } from 'src/app/domain/useCase/get-tipo-documentos-use-case';

@Component({
  selector: 'app-lista-tipo-documentos-page',
  templateUrl: './lista-tipo-documentos-page.component.html',
  styleUrls: ['./lista-tipo-documentos-page.component.css']
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
