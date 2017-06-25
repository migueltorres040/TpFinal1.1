import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate } from '@angular/core';// imporacion para las animaciones
import { Router,ActivatedRoute} from '@angular/router';
import { UsuariosService} from './usuarios.service';
import {Usuarios} from './usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  //animacion par los botones
  animations:[
    trigger('animacion',[
      state('inactive',style({
        transform:'scale(1)'
      })),
      state('active',style({
        backgroundColor:'#cfd8dc',
        transform:'scale(1.1)'
      })),
      transition('inactive =>active',animate('100ms ease-in')),
      transition('active =>inactive',animate('100ms ease-out'))
    ])
  ]
})
export class UsuariosComponent implements OnInit {
    estado1="inactive";
    estado2="inactive";
  constructor(
    
  ) { }

  ngOnInit() {
    
  }

}
