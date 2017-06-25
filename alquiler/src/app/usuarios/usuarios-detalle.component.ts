import{Component,OnInit,HostBinding} from '@angular/core';

import { Router,ActivatedRoute} from '@angular/router';
import { UsuariosService} from './usuarios.service';
import {Usuarios} from './usuarios';
import{slide} from './animations';//animacion en router 
@Component({
    selector:'usuarios-detalle',
    templateUrl: './usuarios-detalle.component.html',
    viewProviders:[UsuariosService],
    animations:[slide]//animacion router
})
export class UsuariosDetalleComponent implements OnInit{
    lista: Usuarios[];
    //animacion router
    @HostBinding('@routeAnimation') routeAnimation=true;
    @HostBinding('style.display') display='block';
    @HostBinding('style.position') position='absolute';

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
    modificar(items:Usuarios){
        let link=['/usuarios/detalleUsuario',items.id];
        this.router.navigate(link);
    }
    //metodo borrar
    borrar(item:Usuarios){
        if(!item) return;
        this.servicio.delUsuario(item.id)
                    .subscribe(
                        rs=>console.log(rs),
                        er=> console.log(er),
                        ()=>{
                            this.lista=this.lista.filter(h=>h !==item)
                        }
                    )
    }
}