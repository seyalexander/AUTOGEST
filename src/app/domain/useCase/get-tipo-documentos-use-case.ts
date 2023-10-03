import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { tipoDocumentosModel } from '../models/tipo-documentos/tipo-documentos.model';
import { tipoDocumentoGateway } from '../models/tipo-documentos/gateway/tipo-documentos-gateway';



@Injectable({
  providedIn: 'root'
})

export class GetTipoDocumentoUseCases {

  constructor( private _tipoDocumentosGateWay: tipoDocumentoGateway) {}

  getAllTipoDocumento () : Observable <Array<tipoDocumentosModel>> {
    return this._tipoDocumentosGateWay.getAll();
  }

}
