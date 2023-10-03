import { Observable } from "rxjs";
import { autosModel } from "../autos.model";


export abstract class autosGateway {
  abstract getAll(): Observable<Array<autosModel>>;
}
