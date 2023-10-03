import { Observable } from "rxjs";
import { marcaAutosModel } from "../marca-autos.model";


export abstract class marcaAutosGateway {
  abstract getAll(): Observable<Array<marcaAutosModel>>;
}
