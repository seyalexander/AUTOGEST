import { Component, Input } from '@angular/core';
import { usuarioModel } from 'src/app/domain/models/usuario/usuario.model';

@Component({
  selector: 'app-table-datos-usuarios',
  templateUrl: './table-datos-usuarios.component.html',
  styleUrls: ['./table-datos-usuarios.component.css']
})
export class TableDatosUsuariosComponent {
  @Input() dataUsuarios:  Array<usuarioModel> = [];

  optionSort: {property:string|null, order:string} = {property:null, order: 'asc'}

  cambiarOrden (property:string):void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' :'asc'
    }
  }

}
