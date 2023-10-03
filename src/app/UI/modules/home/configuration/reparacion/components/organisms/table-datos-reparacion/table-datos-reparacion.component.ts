import { Component, Input } from '@angular/core';
import { reparacionModel } from 'src/app/domain/models/reparacion/reparacion.model';

@Component({
  selector: 'app-table-datos-reparacion',
  templateUrl: './table-datos-reparacion.component.html',
  styleUrls: ['./table-datos-reparacion.component.css']
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
