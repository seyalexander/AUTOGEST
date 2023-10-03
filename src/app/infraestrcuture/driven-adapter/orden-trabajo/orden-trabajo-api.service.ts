import { Injectable } from '@angular/core';
import { ordenTrabajoGateway } from 'src/app/domain/models/orden-trabajo/gateway/tipo-documento-gateway';
import { ordenTrabajoModel } from 'src/app/domain/models/orden-trabajo/orden-trabajo.model';
import * as dataRaw from '../../data/orden-trabajo.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenTrabajoApiService extends ordenTrabajoGateway{

  override getAll(): Observable<ordenTrabajoModel[]> {
    const { data }: any = (dataRaw as any).default;
    return of(data);
  }

  constructor() {
    super();
  }
}
