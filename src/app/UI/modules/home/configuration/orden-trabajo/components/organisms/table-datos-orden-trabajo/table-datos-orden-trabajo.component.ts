import { Component, Input } from '@angular/core';
import { ordenTrabajoModel } from 'src/app/domain/models/orden-trabajo/orden-trabajo.model';

@Component({
  selector: 'app-table-datos-orden-trabajo',
  templateUrl: './table-datos-orden-trabajo.component.html',
  styleUrls: ['./table-datos-orden-trabajo.component.css']
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
