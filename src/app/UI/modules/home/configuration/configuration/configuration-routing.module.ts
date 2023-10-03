import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationPageComponent } from './components/configuration-page/configuration-page.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'empresa',
        pathMatch: 'full'
      },
      {
        path: 'empresa',
        loadChildren: () => import ('../empresa/empresa.module').then(m=>m.EmpresaModule)
      },
      {
        path: 'MostrarCliente',
        loadChildren: () => import ('../clientes/clientes.module').then(m=>m.ClientesModule)
      },
      {
        path: 'marca-autos',
        loadChildren: () => import ('../marcas-autos/marcas-autos.module').then(m=>m.MarcasAutosModule)
      },
      {
        path: 'modelo-autos',
        loadChildren: () => import ('../modelos-autos/modelos-autos.module').then(m=>m.ModelosAutosModule)
      },
      {
        path: 'autos',
        loadChildren: () => import ('../autos/autos.module').then(m=>m.AutosModule)
      },
      {
        path: 'tipo-documentos',
        loadChildren: () => import ('../tipo-documentos/tipo-documentos.module').then(m=>m.TipoDocumentosModule)
      },
      {
        path: 'empleados',
        loadChildren: () => import ('../empleados/empleados.module').then(m=>m.EmpleadosModule)
      },
      {
        path: 'orden-trabajo',
        loadChildren: () => import ('../orden-trabajo/orden-trabajo.module').then(m=>m.OrdenTrabajoModule)
      },
      {
        path: 'reparacion',
        loadChildren: () => import ('../reparacion/reparacion.module').then(m=>m.ReparacionModule)
      },
      {
        path: 'rol-usuarios',
        loadChildren: () => import ('../rol-usuario/rol-usuario.module').then(m=>m.RolUsuarioModule)
      },
      {
        path: 'usuarios',
        loadChildren: () => import ('../usuario/usuario.module').then(m=>m.UsuarioModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
