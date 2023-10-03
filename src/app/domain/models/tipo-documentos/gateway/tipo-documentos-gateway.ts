import { Observable } from "rxjs";
import { tipoDocumentosModel } from "../tipo-documentos.model";

export abstract class tipoDocumentoGateway {
  abstract getAll(): Observable<Array<tipoDocumentosModel>>;
}
