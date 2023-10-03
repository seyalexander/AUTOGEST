import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../data/rol-usuario.json';
import { rolUsuarioGateway } from 'src/app/domain/models/rol-usuario/gateway/rol-usuario-gateway';
import { rolUsuarioModel } from 'src/app/domain/models/rol-usuario/rol-usaurio.model';

@Injectable({
  providedIn: 'root'
})
export class RolUsuarioApiService extends rolUsuarioGateway{

  override getAll(): Observable<rolUsuarioModel[]> {
    const { data }: any = (dataRaw as any).default;
     return of(data);
   }

  constructor() {
    super();
  }
}
