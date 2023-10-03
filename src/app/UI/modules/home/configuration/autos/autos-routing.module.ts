import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAutosPageComponent } from './components/page/lista-autos-page/lista-autos-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListaAutosPageComponent,
    outlet: 'configuracion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosRoutingModule { }
