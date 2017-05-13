import{Component,OnInit} from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { UsuariosService} from './usuarios.service';
import{Usuarios} from './usuarios';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'; //agrego la clase validator para validad los campos en un fomeularios
import{UsuariosValidator} from'./usuarios.validators';
@Component({
    selector:'usuarios-alta',
    templateUrl: './usuarios-alta.component.html',
    providers:[UsuariosService]
})
export class UsuariosAltaComponent implements OnInit{
        titulo="Agregar un nuevo registro";
        form1:FormGroup;
        usuarioss:Usuarios; // creo un atributo para enlazar con los controles del formulario  con ngModule
    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private service:UsuariosService,
        private fb:FormBuilder
    ){this.crearControles()}
    ngOnInit(){
       /* let id=this.route.snapshot.params['id'];
        if(!id) return;
        console.log(id);*/
    }
    crearControles(){
        /*this.form1=this.fb.group({
            id:['',Validators.required,UsuariosValidator.valorUnico(this.service)],//validaciones para los campos de los formularios
             nombre:['',Validators.required],
              apellido:['',Validators.required],
               usuario:['',Validators.required],
                password:['',Validators.required],
                 tipo:['',Validators.required]
        })*/
    }
    guardarUsuario(){
        this.service.addUsuarios(this.form1.value)
                    .subscribe(
                        rt => console.log(rt),
                        er => console.log(er),
                        () => console.log("terminado")
                    );
    }
    limpiarFormulario(form1){
        //esta forma de limpiar un formulario se usa cuando no tenemos validaciones en los campos
        /*this.form1.patchValue({
            id:'',
            nombre:'',
            apellido:'',
            usuario:'',
            password:'',
            tipo:''
        })*/
        //limpiar campos con validaciones uso template driven forms 
         this.form1.reset(); 
      
       
    }
}