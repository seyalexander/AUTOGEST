import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { modeloAutosGateway } from '../models/modelo-autos/gateway/modelo-autos-gateway';
import { modeloAutosModel } from '../models/modelo-autos/modelo-autos.model';



@Injectable({
  providedIn: 'root'
})

export class GetModeloAutosUseCases {

  constructor( private _modeloAutosGateWay: modeloAutosGateway) {}

  getAllModeloAutos () : Observable <Array<modeloAutosModel>> {
    return this._modeloAutosGateWay.getAll();
  }

}
