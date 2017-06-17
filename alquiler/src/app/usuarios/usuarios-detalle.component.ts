import{Component,OnInit} from '@angular/core';

import { Router,ActivatedRoute} from '@angular/router';
import { UsuariosService} from './usuarios.service';
import {Usuarios} from './usuarios';
@Component({
    selector:'usuarios-detalle',
    templateUrl: './usuarios-detalle.component.html',
    viewProviders:[UsuariosService]
})
export class UsuariosDetalleComponent implements OnInit{
    lista: Usuarios[];
    constructor(
        private router:Router,
        private servicio:UsuariosService
    ){}
    ngOnInit(){
        this.servicio.getUsuarios()
        .subscribe(
          rs => this.lista=rs,
          er => console.log(er),
          () => console.log(this.lista)
        )
    }
    //implemento el metodo modificar
    modificar(item:Usuarios){
        let link=['/usuarios/detalleUsuario',item.id];
        this.router.navigate(link);
    }
}