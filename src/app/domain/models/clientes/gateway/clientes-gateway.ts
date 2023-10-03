import { Observable } from "rxjs";
import { clienteModel } from "../clientes.model";


export abstract class clientesGateway {
  abstract getAll(): Observable<Array<clienteModel>>;
  abstract newCliente(cliente: clienteModel): Observable<Object>;
}
