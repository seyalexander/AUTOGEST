import { Component, Input } from '@angular/core';
import { empleadoModel } from 'src/app/domain/models/empleado/empleado.model';

@Component({
  selector: 'app-table-datos-empleados',
  templateUrl: './table-datos-empleados.component.html',
  styleUrls: ['./table-datos-empleados.component.css']
})
export class TableDatosEmpleadosComponent {
  @Input() dataEmpleados:  Array<empleadoModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }
}
