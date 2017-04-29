var db=require('./queries');
function http(){
    this.configurar=function(app){
        app.get('/usuarios/',function(solicitud,respuesta){
            db.seleccionar(respuesta);
        })

        // seleccionarpor id
        app.get('/usuarios/:id/',function(solicitud,respuesta){
            db.seleccionarId(solicitud.params.id,respuesta);
        })
        //insertar
        app.post('/usuarios/',function(solicitud,respuesta){
            db.insertar(solicitud.body,respuesta);
        })
        //actualizar
        app.put('/usuarios/',function(solicitud,respuesta){
            db.actualizar(solicitud.body,respuesta);
        })
        // borrar
        app.delete('/usuarios/:id/',function(solicitud,respuesta){
            db.borrar(solicitud.params.id,respuesta);
        })

        
    }
}
module.exports=new http();