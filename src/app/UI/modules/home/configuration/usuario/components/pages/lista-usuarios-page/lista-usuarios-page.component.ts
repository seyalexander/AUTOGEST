import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { usuarioModel } from 'src/app/domain/models/usuario/usuario.model';
import { GetUsuariosUseCases } from 'src/app/domain/useCase/get-usuarios-use-case';

@Component({
  selector: 'app-lista-usuarios-page',
  templateUrl: './lista-usuarios-page.component.html',
  styleUrls: ['./lista-usuarios-page.component.css']
})
export class ListaUsuariosPageComponent {
  nombrePagina: String = 'USUARIOS';

  datosUsuarioslista: Array <usuarioModel> = [];
  listObservers$: Array<Subscription> = [];

  constructor (private _getUsuariosUseCase: GetUsuariosUseCases) {}


  ngOnInit():  void {

    const ObservarDatosClientes$ = this._getUsuariosUseCase.getAllUsuarios().
    subscribe( Response => {
        this.datosUsuarioslista = Response;
      })

    this.listObservers$ = [ObservarDatosClientes$]

  }
}
