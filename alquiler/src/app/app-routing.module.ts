import{NgModule} from '@angular/core';

import{RouterModule,Routes} from '@angular/router';
import{HomeComponent} from './home/home.component';
import{ClientesComponent} from './clientes/clientes.component';
import{DetalleComponent} from './detalle/detalle.component';
//import{UsuariosComponent} from './usuarios/usuarios.component';
import{VehiculosComponent} from './vehiculos/vehiculos.component';
import{LoginComponent} from './login/login.component';
//import{UsuariosAltaComponent} from './usuarios/usuarios-alta.component';
//import{UsuariosDetalleComponent} from './usuarios/usuarios-detalle.component';
//import{UsuarioModule}from './usuarios/usuario.module';
const appRoutes: Routes=[
    { path: 'home',component:HomeComponent},
    { path: 'clientes',component:ClientesComponent},
   // { path: 'usuarios',loadChildren:()=>UsuarioModule},
    { path: 'vehiculos',component:VehiculosComponent},
    { path: 'detalle',component:DetalleComponent },
    { path: 'login',component:LoginComponent }
    
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
