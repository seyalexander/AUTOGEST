import { Injectable } from '@angular/core';
import { ordenTrabajoGateway } from 'src/app/domain/models/orden-trabajo/gateway/tipo-documento-gateway';
import { ordenTrabajoModel } from 'src/app/domain/models/orden-trabajo/orden-trabajo.model';
import * as dataRaw from '../../data/orden-trabajo.json';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoApiService extends ordenTrabajoGateway{

  // override getAll(): Observable<ordenTrabajoModel[]> {
  //   const { data }: any = (dataRaw as any).default;
  //   return of(data);
  // }

  private URL = environment.api;

  override getAll(): Observable<ordenTrabajoModel[]> {
    return this.httpClient.get<ordenTrabajoModel[]>(`${this.URL}/MostrarOrdenIngreso`)
  }

  override newOrdenProducto(ordenes: ordenTrabajoModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/InsertarOrdenIngreso`,ordenes)
  }

  constructor(private httpClient: HttpClient) {
    super();
  }

}
