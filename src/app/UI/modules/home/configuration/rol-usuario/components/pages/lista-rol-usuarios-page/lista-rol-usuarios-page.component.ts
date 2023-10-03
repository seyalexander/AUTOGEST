import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { GetRolUsuarioUseCases } from 'src/app/domain/useCase/get-rol-usuario-use-case';
import { rolUsuarioModel } from 'src/app/domain/models/rol-usuario/rol-usaurio.model';

@Component({
  selector: 'app-lista-rol-usuarios-page',
  templateUrl: './lista-rol-usuarios-page.component.html',
  styleUrls: ['./lista-rol-usuarios-page.component.css']
})
export class ListaRolUsuariosPageComponent {
  nombrePagina: String = 'ROL USUARIOS'

  datosRolUsuarioslista: Array <rolUsuarioModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getRolUsuariosnUseCase: GetRolUsuarioUseCases) {}


  ngOnInit():  void {

    const ObservarDatosModeloAutos$ = this._getRolUsuariosnUseCase.getAllRolUsuarios().
    subscribe( Response => {
        this.datosRolUsuarioslista = Response;
      })

    this.listObservers$ = [ObservarDatosModeloAutos$]

  }
}
