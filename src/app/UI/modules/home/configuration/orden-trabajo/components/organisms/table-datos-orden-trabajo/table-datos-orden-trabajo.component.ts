import { Component, Input } from '@angular/core';
import { ordenTrabajoModel } from 'src/app/domain/models/orden-trabajo/orden-trabajo.model';
import { OrderListOrdenTrabajoPipe } from '../../../../../../../shared/pipes/order/orden-trabajo/order-list-orden-trabajo.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';

@Component({
    selector: 'app-table-datos-orden-trabajo',
    templateUrl: './table-datos-orden-trabajo.component.html',
    styleUrls: ['./table-datos-orden-trabajo.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListOrdenTrabajoPipe]
})
export class TableDatosOrdenTrabajoComponent {
  @Input() dataOrdenTrabajo:  Array<ordenTrabajoModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }
}
