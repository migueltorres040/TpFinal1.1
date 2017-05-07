import{Component,OnInit} from '@angular/core';
import{Router,ActivatedRoute,Params} from '@angular/router';
import { UsuariosService} from './usuarios.service';
import{FormGroup,FormBuilder,Validator} from '@angular/forms';
@Component({
    selector:'usuarios-alta',
    templateUrl: './usuarios-alta.component.html'
})
export class UsuariosAltaComponent implements OnInit{
        titulo="Agregar un nuevo registro";
        form1:FormGroup;
    constructor(
        private route:ActivatedRoute,
        private router:Router,
        private service:UsuariosService,
        private fb:FormBuilder
    ){this.crearControles()}
    ngOnInit(){
        let id=this.route.snapshot.params['id'];
        if(!id) return;
        console.log(id);
    }
    crearControles(){
        this.form1=this.fb.group({
            id:'',
             nombre:'',
              apellido:'',
               usuario:'',
                password:'',
                 tipo:''
        })
    }
    guardarUsuario(){
        this.service.addUsuarios(this.form1.value)
                    .subscribe(
                        rt => console.log(rt),
                        er => console.log(er),
                        () => console.log("terminado")
                    );
    }
}