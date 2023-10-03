import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../data/autos.json';
import { autosModel } from 'src/app/domain/models/autos/autos.model';
import { autosGateway } from 'src/app/domain/models/autos/gateway/autos-gateway';

@Injectable({
  providedIn: 'root'
})
export class AutosApiService extends autosGateway{

  override getAll(): Observable<autosModel[]> {
    const { data }: any = (dataRaw as any).default;
    return of(data);
  }

  constructor() {
    super();
  }
}
