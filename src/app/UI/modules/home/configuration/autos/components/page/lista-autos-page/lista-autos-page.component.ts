import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { autosModel } from 'src/app/domain/models/autos/autos.model';
import { GetAutosUseCases } from 'src/app/domain/useCase/get-autos-use-case';
import { TableDatosAutosComponent } from '../../organisms/table-datos-autos/table-datos-autos.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';

@Component({
    selector: 'app-lista-autos-page',
    templateUrl: './lista-autos-page.component.html',
    styleUrls: ['./lista-autos-page.component.css'],
    standalone: true,
    imports: [HeaderPagesConfigurationComponent, TableDatosAutosComponent]
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
