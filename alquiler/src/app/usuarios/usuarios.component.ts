import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { UsuariosService} from './usuarios.service';
import {Usuarios} from './usuarios';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
 styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
    
  constructor(
    
  ) { }

  ngOnInit() {
    
  }

}
