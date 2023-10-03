import { Component, Input } from '@angular/core';
import { marcaAutosModel } from 'src/app/domain/models/marcas-autos/marca-autos.model';
import { OrderListMarcaAutosPipe } from '../../../../../../../shared/pipes/order/marca-autos/order-list-marca-autos.pipe';
import { NgFor } from '@angular/common';
import { ThTablesIconTextComponent } from '../../../../../../../shared/components/atoms/th-tables-icon-text/th-tables-icon-text.component';

@Component({
    selector: 'app-table-datos-marcas-autos',
    templateUrl: './table-datos-marcas-autos.component.html',
    styleUrls: ['./table-datos-marcas-autos.component.css'],
    standalone: true,
    imports: [ThTablesIconTextComponent, NgFor, OrderListMarcaAutosPipe]
})
export class TableDatosMarcasAutosComponent {
  @Input() dataMarcaAutos:  Array<marcaAutosModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }
}
