import { Observable } from "rxjs";
import { modeloAutosModel } from "../modelo-autos.model";


export abstract class modeloAutosGateway {
  abstract getAll(): Observable<Array<modeloAutosModel>>;
}
