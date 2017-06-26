import{NgModule} from '@angular/core';

import{RouterModule,Routes} from '@angular/router';

import{UsuariosComponent} from './usuarios.component';
import{UsuariosAltaComponent} from './usuarios-alta.component';
import{UsuariosDetalleComponent} from './usuarios-detalle.component';

const usuarioRoutes: Routes=[
    { path: 'usuarios',component:UsuariosComponent,
      children:[
          {path: '',redirectTo:'detalleUsuario',pathMatch:'full'},
          
           {path: 'altaUsuario',component:UsuariosAltaComponent},
           {path: 'detalleUsuario',component:UsuariosDetalleComponent},
           { path: 'detalleUsuario/:id', component: UsuariosAltaComponent }
      ]
    },   
];

@NgModule({
    imports:[
        RouterModule.forChild(usuarioRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class UsuarioRoutingModule{}
