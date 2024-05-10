import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { choferesModel } from 'src/app/domain/models/choferes/choferes.model';
import { choferesGateway } from 'src/app/domain/models/choferes/gateway/choferes-gateway';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChoferesApiService extends choferesGateway{
  private URL = environment.api;

  override getAllChoferes(): Observable<choferesModel[]> {
    return this.httpClient.get<choferesModel[]>(`${this.URL}/MostrarChofer`)
  }

  constructor(private httpClient: HttpClient) {
    super();
  }
}
