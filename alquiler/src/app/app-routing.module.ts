import{NgModule} from '@angular/core';

import{RouterModule,Routes} from '@angular/router';
import{HomeComponent} from './home/home.component';
import{ClientesComponent} from './clientes/clientes.component';
import{DetalleComponent} from './detalle/detalle.component';
import{UsuariosComponent} from './usuarios/usuarios.component';
import{VehiculosComponent} from './vehiculos/vehiculos.component';
import{UsuariosAltaComponent} from './usuarios/usuarios-alta.component';
import{UsuariosDetalleComponent} from './usuarios/usuarios-detalle.component';

const appRoutes: Routes=[
    { path: 'home',component:HomeComponent},
    { path: 'clientes',component:ClientesComponent},
    { path: 'usuarios',component:UsuariosComponent,
      children:[
          {path: '',redirectTo:'detalleUsuario',pathMatch:'full'},
          {path: 'detalleUsuario',component:UsuariosDetalleComponent},
           {path: 'altaUsuario',component:UsuariosAltaComponent}
      ]
    },
    { path: 'vehiculos',component:VehiculosComponent},
    { path: 'detalle',component:DetalleComponent },
    
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
