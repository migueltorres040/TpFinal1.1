import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';// importo FormsModule para usar template driven forms 
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { DetalleComponent } from './detalle/detalle.component';
import{LoginComponent} from './login/login.component';
import{AuthService} from './login/auth.service';
//import { UsuariosService} from './usuarios/usuarios.service';
//import{UsuariosAltaComponent} from './usuarios/usuarios-alta.component';
//import{UsuariosDetalleComponent} from './usuarios/usuarios-detalle.component';
import{UsuarioModule}from './usuarios/usuario.module'; //se elimina los anteriores porque estan agrupado en este modulo



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    //UsuariosComponent,
    VehiculosComponent,
    DetalleComponent,
    LoginComponent
    //UsuariosAltaComponent,
   // UsuariosDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    UsuarioModule
  ],
  providers: [AuthService],// aca se importan los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
