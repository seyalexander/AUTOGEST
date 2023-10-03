import { Component, Input } from '@angular/core';
import { autosModel } from 'src/app/domain/models/autos/autos.model';
import { OrderListAutosPipe } from '../../../../../../../shared/pipes/order/autos/order-list-autos.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';

@Component({
    selector: 'app-table-datos-autos',
    templateUrl: './table-datos-autos.component.html',
    styleUrls: ['./table-datos-autos.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListAutosPipe]
})
export class TableDatosAutosComponent {
  @Input() dataAutos:  Array<autosModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }
}
