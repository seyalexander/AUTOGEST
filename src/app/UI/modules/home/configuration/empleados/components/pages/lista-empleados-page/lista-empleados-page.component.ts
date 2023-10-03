import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { empleadoModel } from 'src/app/domain/models/empleado/empleado.model';
import { GetTipoEmpleadosUseCases } from 'src/app/domain/useCase/get-empleado-use-case';
import { TableDatosEmpleadosComponent } from '../../organisms/table-datos-empleados/table-datos-empleados.component';
import { HeaderPagesConfigurationComponent } from '../../../../../../../shared/components/organisms/header-pages-configuration/header-pages-configuration.component';

@Component({
    selector: 'app-lista-empleados-page',
    templateUrl: './lista-empleados-page.component.html',
    styleUrls: ['./lista-empleados-page.component.css'],
    standalone: true,
    imports: [HeaderPagesConfigurationComponent, TableDatosEmpleadosComponent]
})
export class ListaEmpleadosPageComponent {
  nombrePagina: String = 'EMPLEADOS';

  datosEmpleadoslista: Array <empleadoModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getEmpleadosUseCase: GetTipoEmpleadosUseCases) {}


  ngOnInit():  void {

    const ObservarDatosClientes$ = this._getEmpleadosUseCase.getAllEmpleados().
    subscribe( Response => {
        this.datosEmpleadoslista = Response;
      })

    this.listObservers$ = [ObservarDatosClientes$]

  }
}
