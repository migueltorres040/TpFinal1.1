// este modulo se crea para agrupar todos los modulos de usuarios para poder ser utilizado en otro componentes
import{NgModule} from '@angular/core';
import{CommonModule} from '@angular/common';
import{ReactiveFormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';

import { UsuariosComponent } from './usuarios.component';
import{UsuariosAltaComponent} from './usuarios-alta.component';
import{UsuariosDetalleComponent} from './usuarios-detalle.component';
import { UsuariosService} from './usuarios.service';
import{UsuarioRoutingModule} from './usuario-routing.module';

@NgModule({
    declarations:[
        UsuariosComponent,
        UsuariosAltaComponent,
        UsuariosDetalleComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        HttpModule,
        UsuarioRoutingModule
    ],
    exports:[
        UsuariosComponent,
        UsuariosAltaComponent,
        UsuariosDetalleComponent
       
    ],
    providers:[UsuariosService]
})
export class UsuarioModule{}