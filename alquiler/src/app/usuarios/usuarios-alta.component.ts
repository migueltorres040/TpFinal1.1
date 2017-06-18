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
        titulo="";
        form1:FormGroup;
        usuarios:Usuarios[]; // creo un atributo para enlazar con los controles del formulario  con ngModule
        esEdicion=false;//atributo para reconocer si utilizar el metodo guardar un registro nuevo o el guardar de modificar
    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private service:UsuariosService,
        private fb:FormBuilder
    ){}
    ngOnInit(){
        let id=this.route.snapshot.params['id'];
        if(!id){
            this.titulo="Agregar registro nuevo";
            this.crearControlesNuevos();
            return;
        } 
        this.titulo="Edicion de registro";
        this.crearControlesEditar();

        //trae los datos al formulario
        this.service.getUsuario(id)
        .subscribe(
            rs=> this.usuarios=rs,
            er=> console.log('Error:%s',er),
            ()=>{
                if(this.usuarios.length>0){
                    this.esEdicion=true;//cuando se carga la informacion en el formulario 
                    this.form1.patchValue({
                        id:this.usuarios[0].id,
                        nombre:this.usuarios[0].nombre,
                        apellido:this.usuarios[0].apellido,
                        usuario:this.usuarios[0].usuario,
                        password:this.usuarios[0].password,
                        tipo:this.usuarios[0].tipo

                    })
                }
            }
        )
        console.log(id);
    }
    // esta funcion como tiene una validacion el el cual no se puede agregar un registro duplicado no funciona el 
    //guardar del actualizar proque el boton esta inhabilitado
    crearControlesNuevos(){
        this.form1=this.fb.group({
            id:['',Validators.required,UsuariosValidator.valorUnico(this.service)],//validaciones para los campos de los formularios
             nombre:['',Validators.required],
              apellido:['',Validators.required],
              usuario:['',Validators.required],
                password:['',Validators.compose([
                    Validators.required,
                    Validators.maxLength(10)
                ])],
                 tipo:['',Validators.required]
         })
    }
    //funcion para poder utilizar el metodo guardar de actualizar, para ello sacamos la validacion de valorUnico
     crearControlesEditar(){
        this.form1=this.fb.group({
            id:['',Validators.required],
             nombre:['',Validators.required],
              apellido:['',Validators.required],
              usuario:['',Validators.required],
                password:['',Validators.compose([
                    Validators.required,
                    Validators.maxLength(10)
                ])],
                 tipo:['',Validators.required]
         })
    }
    //metodo guardar para actualizar registro
    guardarUsuario(){
        if(this.esEdicion){
            this.updateUsuario(this.form1.value);
        }
        else{
            this.agregarUsuario(this.form1.value);
        }
    }
    //metodo para agregar un nuevo registro
    agregarUsuario(usuario:Usuarios){
        this.service.addUsuarios(usuario)
                    .subscribe(
                        rt => console.log(rt),
                        er => console.log(er),
                        () => console.log("terminado")
                    );
    }
    //metodo para modificar usuarios
    updateUsuario(usuario:Usuarios){
        if(!usuario)return;
        this.service.putUsuario(usuario)
                    .subscribe(
                        rt=>console.log(rt),
                        er=>console.log(er),
                        ()=>this.goLista()
                    )
    }
    limpiarFormulario(){
         this.form1.reset();      
    }
    //metodo para enviar al router asignado
    goLista(){
        let link=['/usuarios/detalleUsuario/'];
        this.router.navigate(link);
    }
}