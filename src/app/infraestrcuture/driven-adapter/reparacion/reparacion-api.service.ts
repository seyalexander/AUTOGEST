import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { reparacionGateway } from 'src/app/domain/models/reparacion/gateway/reparacion-gateway';
import { reparacionModel } from 'src/app/domain/models/reparacion/reparacion.model';
import * as dataRaw from '../../data/reparacion.json';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReparacionApiService extends reparacionGateway {

  // override getAll(): Observable<reparacionModel[]> {
  //   const { data }: any = (dataRaw as any).default;
  //   return of(data);
  // }

  private URL = environment.api;

  override getAll(): Observable<reparacionModel[]> {
    return this.httpClient.get<reparacionModel[]>(`${this.URL}/MostrarDetalleSericio`)
  }

  override newReparacion(reparacion: reparacionModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/MostrarDetalleSericio`, reparacion)
  }

  override getById(id: number): Observable<reparacionModel> {
    return this.httpClient.get<reparacionModel>(`${this.URL}/MostrarDetalleSericio/${id}`)
  }

  override updateReparacion(id_Reparacion: number, reparacion: reparacionModel): Observable<Object> {
    return this.httpClient.put(`${this.URL}/MostrarDetalleSericio/${id_Reparacion}`, reparacion)
  }

  constructor(private httpClient: HttpClient) {
    super();
  }
}
