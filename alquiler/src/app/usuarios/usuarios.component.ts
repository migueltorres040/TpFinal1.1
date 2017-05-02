import { Component, OnInit } from '@angular/core';
import { UsuariosService} from './usuarios.service';
import {Usuarios} from './usuarios';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
    usuarios: Usuarios[];
  constructor(
    private servicio:UsuariosService
  ) { }

  ngOnInit() {
    this.servicio.getInventario()
        .subscribe(
          rs => this.usuarios=rs,
          er => console.log(er),
          () => console.log(this.usuarios)
        )
  }

}
