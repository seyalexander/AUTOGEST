import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { empleadoModel } from 'src/app/domain/models/empleado/empleado.model';
import { empleadoGateway } from 'src/app/domain/models/empleado/gateway/empleado-gateway';
import * as dataRaw from '../../data/empleados.json';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosApiService extends empleadoGateway{

  override getAll(): Observable<empleadoModel[]> {
    const { data }: any = (dataRaw as any).default;
    return of(data);
  }


  constructor() {
    super();
  }
}
