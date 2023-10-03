import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaModeloAutosPageComponent } from './components/page/lista-modelo-autos-page/lista-modelo-autos-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListaModeloAutosPageComponent,
    outlet: 'configuracion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelosAutosRoutingModule { }
