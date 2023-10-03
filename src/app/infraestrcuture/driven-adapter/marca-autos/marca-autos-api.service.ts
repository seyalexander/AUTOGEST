import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { marcaAutosGateway } from 'src/app/domain/models/marcas-autos/gateway/marca-autos-gateway';
import { marcaAutosModel } from 'src/app/domain/models/marcas-autos/marca-autos.model';
import * as dataRaw from '../../data/marca-autos.json';

@Injectable({
  providedIn: 'root'
})
export class MarcaAutosApiService extends marcaAutosGateway{

  override getAll(): Observable<marcaAutosModel[]> {
    const { data }: any = (dataRaw as any).default;
    return of(data);
  }

  constructor() {
    super();
  }
}
