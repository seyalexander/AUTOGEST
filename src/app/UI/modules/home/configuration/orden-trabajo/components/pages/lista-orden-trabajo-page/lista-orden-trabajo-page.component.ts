import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ordenTrabajoModel } from 'src/app/domain/models/orden-trabajo/orden-trabajo.model';
import { GetOrdenTrabajoUseCases } from 'src/app/domain/useCase/get-orden-trabajo-use-case';
import { TableDatosOrdenTrabajoComponent } from '../../organisms/table-datos-orden-trabajo/table-datos-orden-trabajo.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { CommonModule } from '@angular/common';
import { RegistroDatosOrdenTrabajoPageComponent } from '../registro-datos-orden-trabajo-page/registro-datos-orden-trabajo-page.component';

@Component({
    selector: 'app-lista-orden-trabajo-page',
    templateUrl: './lista-orden-trabajo-page.component.html',
    styleUrls: ['./lista-orden-trabajo-page.component.css'],
    standalone: true,
    imports: [ RegistroDatosOrdenTrabajoPageComponent, HeaderPagesConfigurationComponent, TableDatosOrdenTrabajoComponent, CommonModule]
})
export class ListaOrdenTrabajoPageComponent {
  nombrePagina: String = 'ORDEN INGRESO'

  datosOrdenTrabjolista: Array <ordenTrabajoModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getOrdenTrabajoUseCase: GetOrdenTrabajoUseCases) {}

  //================================================================
  // ABRIR MODAL DE REGISTRAR
  //================================================================

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  ngOnInit():  void {

    const ObservarDatosModeloAutos$ = this._getOrdenTrabajoUseCase.getAllOrdenTrabajo().
    subscribe( Response => {
        this.datosOrdenTrabjolista = Response;
      })

    this.listObservers$ = [ObservarDatosModeloAutos$]

  }
}
