import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { autosModel } from 'src/app/domain/models/autos/autos.model';
import { GetAutosUseCases } from 'src/app/domain/useCase/get-autos-use-case';
import { TableDatosAutosComponent } from '../../organisms/table-datos-autos/table-datos-autos.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';
import { CommonModule } from '@angular/common';
import { RegistroDatosAutosPageComponent } from '../registro-datos-autos-page/registro-datos-autos-page.component';

@Component({
    selector: 'app-lista-autos-page',
    templateUrl: './lista-autos-page.component.html',
    styleUrls: ['./lista-autos-page.component.css'],
    standalone: true,
    imports: [RegistroDatosAutosPageComponent, HeaderPagesConfigurationComponent, TableDatosAutosComponent, CommonModule]
})
export class ListaAutosPageComponent {
  nombrePagina: String = 'AUTOS'
  isLoading = false;
  datosAutoslista: Array <autosModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getAutosUseCase: GetAutosUseCases) {}

  private autosSubscription: Subscription | undefined;

  //============================================================================
  // FUNCIÓN PRINCIPAL
  //============================================================================

  ngOnInit():  void {

    this.obtenerAutosExito()

  }

  //============================================================================
  // MOSTRAR MODAL DE REGISTRO
  //============================================================================

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  //============================================================================
  // MOSTRAR INFORMACIÓN
  //============================================================================

  obtenerAutosExito(): void {
    this.isLoading = true;
    this.autosSubscription = this._getAutosUseCase.getAllAutos().
      subscribe((Response: autosModel[]) => {
        this.datosAutoslista = Response;
        console.log(Response);

        this.isLoading = false;
      })
  }

  //============================================================================
  // DESTRUIR PETICIONES AL CAMBIAR DE PÁGINA
  //============================================================================

  ngOnDestroy(): void {
    if (this.autosSubscription) {
      this.autosSubscription.unsubscribe();
    }
  }

}
