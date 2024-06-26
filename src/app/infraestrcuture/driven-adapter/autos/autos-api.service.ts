import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../data/autos.json';
import { autosModel } from 'src/app/domain/models/autos/autos.model';
import { autosGateway } from 'src/app/domain/models/autos/gateway/autos-gateway';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutosApiService extends autosGateway{

  // override getAllAutos(): Observable<autosModel[]> {
  //   const { data }: any = (dataRaw as any).default;
  //   return of(data);
  // }

  private URL = environment.api;

  override getAllAutos(): Observable<autosModel[]> {
    return this.httpClient.get<autosModel[]>(`${this.URL}/MostrarAuto`)
  }

  override newAutos(autos: autosModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/InsertarAuto`, autos)
  }

  override getById(id: number): Observable<autosModel> {
    return this.httpClient.get<autosModel>(`${this.URL}/MostrarId/${id}`)
  }

  override updatAuto(id_Auto: number, auto: autosModel): Observable<Object> {
    return this.httpClient.put(`${this.URL}/ActualizarAuto/${id_Auto}`, auto)
  }

  constructor(private httpClient: HttpClient) {
    super();
  }
}
