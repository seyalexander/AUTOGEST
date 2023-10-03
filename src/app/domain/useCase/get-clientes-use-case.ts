
import { Inject, inject, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { clientesGateway } from '../models/clientes/gateway/clientes-gateway';
import { clienteModel } from '../models/clientes/clientes.model';



@Injectable({
  providedIn: 'root'
})

export class GetClientesUseCases {

  constructor( private _clientesGateWay: clientesGateway) {}

  getAllClientes () : Observable <Array<clienteModel>> {
    return this._clientesGateWay.getAll();
  }

  newCliente (cliente: clienteModel) : Observable <object> {
    return this._clientesGateWay.newCliente(cliente);
  }

}
