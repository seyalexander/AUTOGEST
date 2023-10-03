import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { reparacionModel } from 'src/app/domain/models/reparacion/reparacion.model';
import { GetReparacionUseCases } from 'src/app/domain/useCase/get-reparacion-use-case';

@Component({
  selector: 'app-lista-reparacion-page',
  templateUrl: './lista-reparacion-page.component.html',
  styleUrls: ['./lista-reparacion-page.component.css']
})
export class ListaReparacionPageComponent {
  nombrePagina: String = 'REPARACIÓN'

  datosReparacionlista: Array <reparacionModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getReparacionUseCase: GetReparacionUseCases) {}


  ngOnInit():  void {

    const ObservarDatosModeloAutos$ = this._getReparacionUseCase.getAllReparacion().
    subscribe( Response => {
        this.datosReparacionlista = Response;
      })

    this.listObservers$ = [ObservarDatosModeloAutos$]

  }
}
