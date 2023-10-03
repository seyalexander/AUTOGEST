import { Observable } from "rxjs";
import { rolUsuarioModel } from "../rol-usaurio.model";

export abstract class rolUsuarioGateway {
  abstract getAll(): Observable<Array<rolUsuarioModel>>;
}
