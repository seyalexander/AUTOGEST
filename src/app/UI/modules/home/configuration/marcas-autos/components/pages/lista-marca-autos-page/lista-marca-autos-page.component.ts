import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { marcaAutosModel } from 'src/app/domain/models/marcas-autos/marca-autos.model';
import { GetMarcaAutosUseCases } from 'src/app/domain/useCase/get-marca-autos-use-case';

@Component({
  selector: 'app-lista-marca-autos-page',
  templateUrl: './lista-marca-autos-page.component.html',
  styleUrls: ['./lista-marca-autos-page.component.css']
})
export class ListaMarcaAutosPageComponent {
  nombrePagina: String = 'MARCA AUTOS'

  datosMarcaAutoslista: Array <marcaAutosModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getMarcaAutosUseCase: GetMarcaAutosUseCases) {}


  ngOnInit():  void {

    const ObservarDatosMarcaAutos$ = this._getMarcaAutosUseCase.getAllMarcaAutos().
    subscribe( Response => {
        this.datosMarcaAutoslista = Response;
      })

    this.listObservers$ = [ObservarDatosMarcaAutos$]

  }

}
