import { GetModeloAutosUseCases } from './../../../../../../../../domain/useCase/get-modelo-autos-use-case';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { modeloAutosModel } from 'src/app/domain/models/modelo-autos/modelo-autos.model';

@Component({
  selector: 'app-lista-modelo-autos-page',
  templateUrl: './lista-modelo-autos-page.component.html',
  styleUrls: ['./lista-modelo-autos-page.component.css']
})
export class ListaModeloAutosPageComponent {
  nombrePagina: String = 'MODELO AUTOS'

  datosModeloAutoslista: Array <modeloAutosModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getModeloAutosUseCase: GetModeloAutosUseCases) {}


  ngOnInit():  void {

    const ObservarDatosModeloAutos$ = this._getModeloAutosUseCase.getAllModeloAutos().
    subscribe( Response => {
        this.datosModeloAutoslista = Response;
      })

    this.listObservers$ = [ObservarDatosModeloAutos$]

  }
}
