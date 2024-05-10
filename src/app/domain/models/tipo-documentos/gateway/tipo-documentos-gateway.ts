import { tipoDocumentosModel } from 'src/app/domain/models/tipo-documentos/tipo-documentos.model';
import { Observable } from "rxjs";

export abstract class tipoDocumentoGateway {
  abstract getAll(): Observable<Array<tipoDocumentosModel>>;
  abstract newTipoDocumento(tipoDocumento: tipoDocumentosModel): Observable<Object>;
  abstract getById(id: number): Observable<tipoDocumentosModel>;
  abstract updateTipoDocumento(id: number, tipoDocumento: tipoDocumentosModel): Observable<Object>;
}
