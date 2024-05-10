import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { familiaProductoModel } from 'src/app/domain/models/familia-productos/familiaProductos.model';
import { familiaProductosGateway } from 'src/app/domain/models/familia-productos/gateway/familiaProductos-gateway';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FamiliaProductosApiService extends familiaProductosGateway{

  private URL = environment.api;

  override getAllFamiliaProductos(): Observable<familiaProductoModel[]> {
    return this.httpClient.get<familiaProductoModel[]>(`${this.URL}/MostrarFamilia`)
   }

  override newFamiliaProductos(familiaProductos: familiaProductoModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/RegistrarFamilia`, familiaProductos)
  }

  override getById(id: number): Observable<familiaProductoModel> {
    return this.httpClient.get<familiaProductoModel>(`${this.URL}/BuscarFamilia${id}`)
  }

  override updateFamiliaProductos(id: number, familiaProductos: familiaProductoModel): Observable<Object> {
    return this.httpClient.put(`${this.URL}/ActualizarMarca/${id}`, familiaProductos)
  }

  constructor(private httpClient: HttpClient) {
    super();
  }
}
