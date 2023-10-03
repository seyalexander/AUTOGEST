import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTipoDocumentosPageComponent } from './components/page/lista-tipo-documentos-page/lista-tipo-documentos-page.component';

const routes: Routes = [
  {
    path: '',
    component: ListaTipoDocumentosPageComponent,
    outlet: 'configuracion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoDocumentosRoutingModule { }
