import { Routes } from '@angular/router';
import { HomePageComponent } from './UI/modules/home/home/components/home-page/home-page.component';
import { ListaLoginPagesComponent } from './UI/modules/auth/components/pages/lista-login-pages/lista-login-pages.component';
import { ConfigurationPageComponent } from './UI/modules/home/configuration/configuration/components/configuration-page/configuration-page.component';
import { ListaClientesPageComponent } from './UI/modules/home/configuration/clientes/components/pages/lista-clientes-page/lista-clientes-page.component';
import { ListaChoferesPageComponent } from './UI/modules/home/configuration/choferes/components/page/lista-choferes-page/lista-choferes-page.component';
import { ListaDatosEmpresaComponent } from './UI/modules/home/configuration/empresa/components/pages/lista-datos-empresa/lista-datos-empresa.component';
import { ListaMarcaAutosPageComponent } from './UI/modules/home/configuration/marcas-autos/components/pages/lista-marca-autos-page/lista-marca-autos-page.component';
import { ListaModeloAutosPageComponent } from './UI/modules/home/configuration/modelos-autos/components/page/lista-modelo-autos-page/lista-modelo-autos-page.component';
import { ListaAutosPageComponent } from './UI/modules/home/configuration/autos/components/page/lista-autos-page/lista-autos-page.component';
import { ListaTipoDocumentosPageComponent } from './UI/modules/home/configuration/tipo-documentos/components/page/lista-tipo-documentos-page/lista-tipo-documentos-page.component';
import { ListaEmpleadosPageComponent } from './UI/modules/home/configuration/empleados/components/pages/lista-empleados-page/lista-empleados-page.component';
import { ListaOrdenTrabajoPageComponent } from './UI/modules/home/configuration/orden-trabajo/components/pages/lista-orden-trabajo-page/lista-orden-trabajo-page.component';
import { ListaReparacionPageComponent } from './UI/modules/home/configuration/reparacion/components/pages/lista-reparacion-page/lista-reparacion-page.component';
import { ListaRolUsuariosPageComponent } from './UI/modules/home/configuration/rol-usuario/components/pages/lista-rol-usuarios-page/lista-rol-usuarios-page.component';
import { ListaUsuariosPageComponent } from './UI/modules/home/configuration/usuario/components/pages/lista-usuarios-page/lista-usuarios-page.component';
import { ListaFamiliaProductoPageComponent } from './UI/modules/home/configuration/familia-productos/components/pages/lista-familia-producto-page/lista-familia-producto-page.component';
import { ListaProductosPageComponent } from './UI/modules/home/configuration/productos/components/pages/lista-productos-page/lista-productos-page.component';


export const AppRoutes: Routes = [

  {
    path: '',
    component: ListaLoginPagesComponent,
    loadChildren: () => import ('./UI/modules/auth/auth-routing.module').then(m => m.Authroutes),
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import ('../app/UI/modules/home/dashboard/dashboard-routing.module').then(m=>m.dashboardRoutes),
      },
      {
        path: 'configuracion',
        pathMatch: 'full',
        component: ConfigurationPageComponent,
      },
      {
          path: 'empresa',
          component: ListaDatosEmpresaComponent,
          loadChildren: () => import ('../app/UI/modules/home/configuration/empresa/empresa-routing.module').then(m=>m.empresaRoutes),
      },
      {
          path: 'choferes',
          component: ListaChoferesPageComponent,
          loadChildren: () => import ('../app/UI/modules/home/configuration/choferes/choferes-routing.module').then(m=>m.choferesRoutes)
      },
      {
          path: 'MostrarCliente',
          component: ListaClientesPageComponent,
          loadChildren: () => import ('../app/UI/modules/home/configuration/clientes/clientes-routing.module').then(m=>m.clientesRoutes)
      },
      {
          path: 'marca-autos',
          component: ListaMarcaAutosPageComponent,
          loadChildren: () => import ('../app/UI/modules/home/configuration/marcas-autos/marcas-autos-routing.module').then(m=>m.marcaAutosRoutes)
      },
      {
        path: 'modelo-autos',
        component: ListaModeloAutosPageComponent,
        loadChildren: () => import ('../app/UI/modules/home/configuration/modelos-autos/modelos-autos-routing.module').then(m=>m.modeloAutosRoutes)
      },
      {
        path: 'autos',
        component: ListaAutosPageComponent,
        loadChildren: () => import ('../app/UI/modules/home/configuration/autos/autos-routing.module').then(m=>m.autosRoute),
      },
      {
        path: 'tipo-documentos',
        component: ListaTipoDocumentosPageComponent,
        loadChildren: () => import ('../app/UI/modules/home/configuration/tipo-documentos/tipo-documentos-routing.module').then(m=>m.tipoDocumentosRoutes)
      },
      {
        path: 'empleados',
        component: ListaEmpleadosPageComponent,
        loadChildren: () => import ('../app/UI/modules/home/configuration/empleados/empleados-routing.module').then(m=>m.empleadosRoutes)
      },
      {
        path: 'orden-trabajo',
        component: ListaOrdenTrabajoPageComponent,
        loadChildren: () => import ('../app/UI/modules/home/configuration/orden-trabajo/orden-trabajo-routing.module').then(m=>m.ordenTrabajoRoutes)
      },
      {
        path: 'reparacion',
        component: ListaReparacionPageComponent,
        loadChildren: () => import ('../app/UI/modules/home/configuration/reparacion/reparacion-routing.module').then(m=>m.reparacionRoutes)
      },
      {
        path: 'rol-usuarios',
        pathMatch: 'full',
        component: ListaRolUsuariosPageComponent,
        loadChildren: () => import ('../app/UI/modules/home/configuration/rol-usuario/rol-usuario-routing.module').then(m=>m.rolUsuariosRoutes)
      },
      {
        path: 'usuarios',
        component: ListaUsuariosPageComponent,
        loadChildren: () => import ('../app/UI/modules/home/configuration/usuario/usuario-routing.module').then(m=>m.usuarioRoutes)
      },
      {
        path: 'familia-productos',
        component: ListaFamiliaProductoPageComponent,
        loadChildren: () => import ('../app/UI/modules/home/configuration/familia-productos/familia-productos-routing.module').then(m=>m.familiaProductosRoutes)
      },
      {
        path: 'productos',
        component: ListaProductosPageComponent,
        loadChildren: () => import ('../app/UI/modules/home/configuration/productos/productos-routing.module').then(m=>m.productosRoutes)
      },
      {
        path: 'operacion',
        pathMatch: 'full',
        loadChildren: () => import ('./UI/modules/home/process/process-routing.module').then(m=>m.processRoutes),
      },
    ]
  },
];
