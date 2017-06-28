import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions} from '@angular/http';
import{Observable} from 'rxjs/Observable';
import{Usuarios} from './usuarios';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class UsuariosService {
  //private headers=new Headers({'Content-Type':'application/json'});//&&&
  private options;
  private url='http://localhost:8000/usuarios';

  constructor(private http:Http) { 
    let token=localStorage.getItem('token');
    let headers=new Headers({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+token
    });
    this.options=new RequestOptions({headers:headers})
  }
  getUsuarios():Observable<Usuarios[]>{
    let url= `${this.url}`;
    return this.http.get(url,this.options)
                
                .map(r => r.json())
                .catch(this.handleError);
  }
  //funcion para validacion asincrona --busca en la base si existe el registro
  getUsuario(id:number):Observable<Usuarios[]>{
    let url= `${this.url}/${id}`;
    return this.http.get(url,this.options)
                .first()
                .map(r => r.json())
                .catch(this.handleError);
  }
addUsuarios(usuario:Usuarios){
    let url= `${this.url}`;
    let iJson=JSON.stringify(usuario);
    return this.http.post(url,iJson,this.options)//este header es el que se creo al comienzo &&&
                .map(r => r.json())
                .catch(this.handleError);
  }
  // metodo para modificar registro
 putUsuario(usuario:Usuarios){
   let url=`${this.url}`;
   let iJson=JSON.stringify(usuario);
   return this.http.put(url,iJson,this.options)
                .map(r=>r.json())
                .catch(this.handleError);
 }
 //metodo para eliminar registro
 delUsuario(id:number){
    let url=`${this.url}/${id}`;
    return this.http.delete(url,this.options)
                .map(r=>r.json())
                .catch(this.handleError);
 }
  
  private handleError(error:Response | any){
    let errMsg:string;
    if(error instanceof Response){
      let body=error.json() ||'';
      let err=body.error || JSON.stringify(body);
      errMsg= `${error.status} - ${error.statusText || ''} ${err}`;
    }else{
        errMsg= error.message ? error.message: error.toString();
    }
    return Observable.throw(errMsg);
  }
}
