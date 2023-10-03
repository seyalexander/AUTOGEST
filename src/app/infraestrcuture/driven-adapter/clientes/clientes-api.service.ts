import { Injectable } from '@angular/core';
import { clientesGateway } from 'src/app/domain/models/clientes/gateway/clientes-gateway';
import { clienteModel } from 'src/app/domain/models/clientes/clientes.model';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClientesApiService extends clientesGateway {

  override newCliente(cliente: clienteModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/InsertarCliente`, cliente)
  }

  override getAll(): Observable<clienteModel[]> {
    return this.httpClient.get<clienteModel[]>(`${this.URL}/MostrarCliente`);
  }

  private URL = environment.api;

  constructor(private httpClient: HttpClient) {
    super();
  }

}
