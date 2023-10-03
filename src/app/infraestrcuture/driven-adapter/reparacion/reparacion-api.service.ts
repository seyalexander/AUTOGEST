import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { reparacionGateway } from 'src/app/domain/models/reparacion/gateway/reparacion-gateway';
import { reparacionModel } from 'src/app/domain/models/reparacion/reparacion.model';
import * as dataRaw from '../../data/reparacion.json';

@Injectable({
  providedIn: 'root'
})
export class ReparacionApiService extends reparacionGateway {

  override getAll(): Observable<reparacionModel[]> {
    const { data }: any = (dataRaw as any).default;
    return of(data);
  }

  constructor() {
    super();
  }
}
