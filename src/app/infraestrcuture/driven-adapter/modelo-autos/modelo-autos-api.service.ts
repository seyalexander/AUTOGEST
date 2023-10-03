import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { modeloAutosGateway } from 'src/app/domain/models/modelo-autos/gateway/modelo-autos-gateway';
import { modeloAutosModel } from 'src/app/domain/models/modelo-autos/modelo-autos.model';
import * as dataRaw from '../../data/modelo-autos.json';

@Injectable({
  providedIn: 'root'
})
export class ModeloAutosApiService extends modeloAutosGateway{

  override getAll(): Observable<modeloAutosModel[]> {
    const { data }: any = (dataRaw as any).default;
    return of(data);
  }

  constructor() {
    super();
  }
}
