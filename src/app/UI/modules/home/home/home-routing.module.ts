import {  Routes } from '@angular/router';
import { ConfigurationPageComponent } from '../configuration/configuration/components/configuration-page/configuration-page.component';

export const homeRoutes: Routes = [
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadChildren: () => import ('../dashboard/dashboard-routing.module').then(m=>m.dashboardRoutes),
  //   // canActivate: [authGuard, authorizationGuard]
  // },
  // {
  //   path: 'configuracion',
  //   pathMatch: 'full',
  //   component: ConfigurationPageComponent,
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'empresa',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'empresa',
  //       loadChildren: () => import ('../configuration/empresa/empresa-routing.module').then(m=>m.empresaRoutes),
  //     },
  //     {
  //       path: 'MostrarCliente',
  //       loadChildren: () => import ('../configuration/clientes/clientes-routing.module').then(m=>m.clientesRoutes)
  //     },
  //     {
  //       path: 'marca-autos',
  //       loadChildren: () => import ('../configuration/marcas-autos/marcas-autos-routing.module').then(m=>m.marcaAutosRoutes)
  //     },
  //     {
  //       path: 'modelo-autos',
  //       loadChildren: () => import ('../configuration/modelos-autos/modelos-autos-routing.module').then(m=>m.modeloAutosRoutes)
  //     },
  //     {
  //       path: 'autos',
  //       loadChildren: () => import ('../configuration/autos/autos-routing.module').then(m=>m.autosRoute),
  //     },
  //     {
  //       path: 'tipo-documentos',
  //       loadChildren: () => import ('../configuration/tipo-documentos/tipo-documentos-routing.module').then(m=>m.tipoDocumentosRoutes)
  //     },
  //     {
  //       path: 'empleados',
  //       loadChildren: () => import ('../configuration/empleados/empleados-routing.module').then(m=>m.empleadosRoutes)
  //     },
  //     {
  //       path: 'orden-trabajo',
  //       loadChildren: () => import ('../configuration/orden-trabajo/orden-trabajo-routing.module').then(m=>m.ordenTrabajoRoutes)
  //     },
  //     {
  //       path: 'reparacion',
  //       loadChildren: () => import ('../configuration/reparacion/reparacion-routing.module').then(m=>m.reparacionRoutes)
  //     },
  //     {
  //       path: 'rol-usuarios',
  //       pathMatch: 'full',
  //       loadChildren: () => import ('../configuration/rol-usuario/rol-usuario-routing.module').then(m=>m.rolUsuariosRoutes)
  //     },
  //     {
  //       path: 'usuarios',
  //       loadChildren: () => import ('../configuration/usuario/usuario-routing.module').then(m=>m.usuarioRoutes)
  //     },
  //     {
  //       path: 'familia-productos',
  //       loadChildren: () => import ('../configuration/familia-productos/familia-productos-routing.module').then(m=>m.familiaProductosRoutes)
  //     },
  //     {
  //       path: 'productos',
  //       loadChildren: () => import ('../configuration/productos/productos-routing.module').then(m=>m.productosRoutes)
  //     },
  //     {
  //       path: 'choferes',
  //       loadChildren: () => import ('../configuration/choferes/choferes-routing.module').then(m=>m.choferesRoutes)
  //     }
  //   ]
  //   // canActivate: [authGuard, authorizationGuard]
  // },
  // {
  //   path: 'operacion',
  //   pathMatch: 'full',
  //   loadChildren: () => import ('../process/process-routing.module').then(m=>m.processRoutes),
  //   // canActivate: [authGuard, authorizationGuard]
  // },
  // {
  //   path: '',
  //   loadChildren: () => import ('../dashboard/dashboard-routing.module').then(m=>m.dashboardRoutes),

  // }
];


