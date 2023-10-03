import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { autosModel } from 'src/app/domain/models/autos/autos.model';
import { GetAutosUseCases } from 'src/app/domain/useCase/get-autos-use-case';

@Component({
  selector: 'app-lista-autos-page',
  templateUrl: './lista-autos-page.component.html',
  styleUrls: ['./lista-autos-page.component.css']
})
export class ListaAutosPageComponent {
  nombrePagina: String = 'AUTOS'

  datosAutoslista: Array <autosModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getAutosUseCase: GetAutosUseCases) {}


  ngOnInit():  void {

    const ObservarDatosClientes$ = this._getAutosUseCase.getAllAutos().
    subscribe( Response => {
        this.datosAutoslista = Response;
      })

    this.listObservers$ = [ObservarDatosClientes$]

  }

}
