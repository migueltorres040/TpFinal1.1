import{NgModule} from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import{HomeComponent} from './home/home.component';
import{ClientesComponent} from './clientes/clientes.component';
import{DetalleComponent} from './detalle/detalle.component';
import{UsuariosComponent} from './usuarios/usuarios.component';
import{VehiculosComponent} from './vehiculos/vehiculos.component';
const appRoutes: Routes=[
    { path: 'home',component:HomeComponent},
    { path: 'clientes',component:ClientesComponent},
    { path: 'usuarios',component:UsuariosComponent},
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
