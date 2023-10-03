import { Component, Input } from '@angular/core';
import { autosModel } from 'src/app/domain/models/autos/autos.model';

@Component({
  selector: 'app-table-datos-autos',
  templateUrl: './table-datos-autos.component.html',
  styleUrls: ['./table-datos-autos.component.css']
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
