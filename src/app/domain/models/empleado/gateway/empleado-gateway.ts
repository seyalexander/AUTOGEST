import { Observable } from "rxjs";
import { empleadoModel } from "../empleado.model";

export abstract class empleadoGateway {
  abstract getAll(): Observable<Array<empleadoModel>>;
}
