import { Observable } from "rxjs";
import { reparacionModel } from "../reparacion.model";

export abstract class reparacionGateway {
  abstract getAll(): Observable<Array<reparacionModel>>;
}
