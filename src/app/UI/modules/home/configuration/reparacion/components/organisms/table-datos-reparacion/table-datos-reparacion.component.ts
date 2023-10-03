import { Component, Input } from '@angular/core';
import { reparacionModel } from 'src/app/domain/models/reparacion/reparacion.model';
import { OrderListReparacionPipe } from '../../../../../../../shared/pipes/order/reparacion/order-list-reparacion.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';

@Component({
    selector: 'app-table-datos-reparacion',
    templateUrl: './table-datos-reparacion.component.html',
    styleUrls: ['./table-datos-reparacion.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListReparacionPipe]
})
export class TableDatosReparacionComponent {
  @Input() dataReparacion:  Array<reparacionModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }
}
