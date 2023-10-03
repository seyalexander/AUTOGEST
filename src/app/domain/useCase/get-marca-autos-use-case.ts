import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { marcaAutosGateway } from '../models/marcas-autos/gateway/marca-autos-gateway';
import { marcaAutosModel } from '../models/marcas-autos/marca-autos.model';



@Injectable({
  providedIn: 'root'
})

export class GetMarcaAutosUseCases {

  constructor( private _marcaAutosGateWay: marcaAutosGateway) {}

  getAllMarcaAutos () : Observable <Array<marcaAutosModel>> {
    return this._marcaAutosGateWay.getAll();
  }

}
