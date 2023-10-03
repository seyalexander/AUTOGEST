import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { reparacionGateway } from '../models/reparacion/gateway/reparacion-gateway';
import { reparacionModel } from '../models/reparacion/reparacion.model';



@Injectable({
  providedIn: 'root'
})

export class GetReparacionUseCases {

  constructor( private _reparacionGateWay: reparacionGateway) {}

  getAllReparacion () : Observable <Array<reparacionModel>> {
    return this._reparacionGateWay.getAll();
  }

}
