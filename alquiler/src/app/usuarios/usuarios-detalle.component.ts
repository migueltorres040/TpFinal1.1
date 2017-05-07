import{Component,OnInit} from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { UsuariosService} from './usuarios.service';
import {Usuarios} from './usuarios';
@Component({
    selector:'usuarios-detalle',
    templateUrl: './usuarios-detalle.component.html'
})
export class UsuariosDetalleComponent implements OnInit{
    usuarios: Usuarios[];
    constructor(
        private servicio:UsuariosService
    ){}
    ngOnInit(){
        this.servicio.getUsuarios()
        .subscribe(
          rs => this.usuarios=rs,
          er => console.log(er),
          () => console.log(this.usuarios)
        )
    }
    
}