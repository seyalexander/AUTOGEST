import { tipoDocumentosModel } from "../tipo-documentos/tipo-documentos.model";

export class empleadoModel {
  Id_Empleado: String | number = '';
  Nombres: String = '';
  Apellidos: String = '';
  Id_Tipo_Documento_Fk: tipoDocumentosModel = {} as tipoDocumentosModel
  Numero_Documento: String = '';
  Telefono: String = '';
}
