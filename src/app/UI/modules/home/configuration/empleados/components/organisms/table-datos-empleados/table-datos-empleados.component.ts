import { Component, Input } from '@angular/core';
import { empleadoModel } from 'src/app/domain/models/empleado/empleado.model';
import { OrderListEmpleadosPipe } from '../../../../../../../shared/pipes/order/empleados/order-list-empleados.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';

@Component({
    selector: 'app-table-datos-empleados',
    templateUrl: './table-datos-empleados.component.html',
    styleUrls: ['./table-datos-empleados.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListEmpleadosPipe]
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
