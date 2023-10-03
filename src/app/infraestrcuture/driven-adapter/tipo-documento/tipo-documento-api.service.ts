import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../data/tipo-documento.json';
import { tipoDocumentoGateway } from 'src/app/domain/models/tipo-documentos/gateway/tipo-documentos-gateway';
import { tipoDocumentosModel } from 'src/app/domain/models/tipo-documentos/tipo-documentos.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoApiService extends tipoDocumentoGateway{

  override getAll(): Observable<tipoDocumentosModel[]> {
   const { data }: any = (dataRaw as any).default;
    return of(data);
  }

  constructor() {
    super();
  }
}
