import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ordenTrabajoModel } from 'src/app/domain/models/orden-trabajo/orden-trabajo.model';
import { GetOrdenTrabajoUseCases } from 'src/app/domain/useCase/get-orden-trabajo-use-case';

@Component({
  selector: 'app-lista-orden-trabajo-page',
  templateUrl: './lista-orden-trabajo-page.component.html',
  styleUrls: ['./lista-orden-trabajo-page.component.css']
})
export class ListaOrdenTrabajoPageComponent {
  nombrePagina: String = 'ORDEN TRABAJO'

  datosOrdenTrabjolista: Array <ordenTrabajoModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getOrdenTrabajoUseCase: GetOrdenTrabajoUseCases) {}


  ngOnInit():  void {

    const ObservarDatosModeloAutos$ = this._getOrdenTrabajoUseCase.getAllOrdenTrabajo().
    subscribe( Response => {
        this.datosOrdenTrabjolista = Response;
      })

    this.listObservers$ = [ObservarDatosModeloAutos$]

  }
}
