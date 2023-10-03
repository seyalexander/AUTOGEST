import { Component, Input } from '@angular/core';
import { rolUsuarioModel } from 'src/app/domain/models/rol-usuario/rol-usaurio.model';

@Component({
  selector: 'app-table-datos-rol-usuarios',
  templateUrl: './table-datos-rol-usuarios.component.html',
  styleUrls: ['./table-datos-rol-usuarios.component.css']
})
export class TableDatosRolUsuariosComponent {
  @Input() dataRolUsuarios: Array<rolUsuarioModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }
}
