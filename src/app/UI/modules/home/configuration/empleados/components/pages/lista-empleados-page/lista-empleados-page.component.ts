import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { empleadoModel } from 'src/app/domain/models/empleado/empleado.model';
import { GetTipoEmpleadosUseCases } from 'src/app/domain/useCase/get-empleado-use-case';

@Component({
  selector: 'app-lista-empleados-page',
  templateUrl: './lista-empleados-page.component.html',
  styleUrls: ['./lista-empleados-page.component.css']
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
