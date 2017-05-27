// este es es valididacion asincronica. permite verificar si se encuntra en la base 
import{AbstractControl,ValidatorFn,Validators} from '@angular/forms';
import{UsuariosService} from './usuarios.service';

export class UsuariosValidator{
    static valorUnico(servicio:UsuariosService):ValidatorFn{
        return(control:AbstractControl):{[key:string]:any}=>{
            if(this.isPresent(Validators.required(control)))return null;
            var v=control.value;
            return new Promise((resolve,reject)=>{
                servicio.getUsuario(v).subscribe(
                    data=>{
                        if(data.length>0)
                        resolve({valorUnico:true});
                        else
                        resolve(null);
                    },
                    err=>resolve({valorUnico:true})
                )
            })
        }
    }
    static isPresent(obj:any):boolean{
        return obj !==undefined && obj !==null;
    }
}