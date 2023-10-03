import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMarcaAutosPageComponent } from './components/pages/lista-marca-autos-page/lista-marca-autos-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListaMarcaAutosPageComponent,
    outlet: 'configuracion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcasAutosRoutingModule { }
