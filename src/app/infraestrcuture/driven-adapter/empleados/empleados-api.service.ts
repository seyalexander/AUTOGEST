import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { empleadoModel } from 'src/app/domain/models/empleado/empleado.model';
import { empleadoGateway } from 'src/app/domain/models/empleado/gateway/empleado-gateway';
import * as dataRaw from '../../data/empleados.json';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosApiService extends empleadoGateway{

  // override getAllEmpleados(): Observable<empleadoModel[]> {
  //   const { data }: any = (dataRaw as any).default;
  //   return of(data);
  // }

  private URL = environment.api;

  override getAllEmpleados(): Observable<empleadoModel[]> {
    return this.httpClient.get<empleadoModel[]>(`${this.URL}/MostrarEmpelado`)
  }

  override newEmpleado(empleado: empleadoModel): Observable<Object> {
    return this.httpClient.post(`${this.URL}/InsertarEmpleado`, empleado)
  }

  override getById(id: number): Observable<empleadoModel> {
    return this.httpClient.get<empleadoModel>(`${this.URL}/BuscarEmpleado/${id}`)
  }

  override updateEmpleados(id: number, empleados: empleadoModel): Observable<Object> {
    return this.httpClient.put(`${this.URL}/ActualizarEmpleado/${id}`, empleados)
  }

  constructor(private httpClient: HttpClient) {
    super();
  }
}
