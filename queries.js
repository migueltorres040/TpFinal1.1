var conexion=require('./connections');
var jwt=require('jsonwebtoken');
function MetodosDB(){
    // traer todo
    this.seleccionar=function(respuesta){
        conexion.obtener(function(er,cn){
            cn.query('SELECT * FROM usuarios', function(error,resultado){
                cn.release();
                if(error){
                    respuesta.send({estado:'error' })
                }else{
                    respuesta.send(resultado);
                }
            })
        })
    }
    // buscar por id
    this.seleccionarId=function(id,respuesta){
        conexion.obtener(function(er,cn){
            cn.query('select * from usuarios where id=?',id,function(error,resultado){
            cn.release();
            if(error){
                respuesta.send({estado:'error'});
            }else{
                respuesta.send(resultado);
            }
        })
        })
        
    }
    // metodo insertar
    this.insertar=function(dato,respuesta){
        conexion.obtener(function(er, cn){
            cn.query('insert into usuarios set ? ',dato,function(error,resultado){
                cn.release();
                if(error){
                    respuesta.send({estado:'error'});
                }else{
                    respuesta.send({estado:'ok'});
                }
            })
        })
    }
    //metodo actualizar
    this.actualizar=function(datos,respuesta){
        conexion.obtener(function(er,cn){
            cn.query('update usuarios set ? where id = ?',[datos,datos.id],function(error,resultado){
                cn.release();
                 if(error){
                    respuesta.send({estado:'error'});
                }else{
                    respuesta.send({estado:'ok'});
                }
            })
        })
    }
    // metodo borrar
    this.borrar=function(id,respuesta){
        conexion.obtener(function(er,cn){
            cn.query('delete from usuarios where id = ?',id,function(error,resultado){
                cn.release();
                if(error){
                    respuesta.send({estado:'error'});
                }else{
                    respuesta.send({estado:'ok'});
                }
            })
        })
    }
    //metodo login
    this.login=function(datos,respuesta){
        conexion.obtener(function(er,cn){
            cn.query('select * from usuarios where usuario=? and password=?',[datos.usuario,datos.password],function(error,resultado){
            cn.release();
            if(error){
                respuesta.send('error');
            }else{
                if(resultado.length==0){
                    console.log('no se encuentra el usuario');
                    respuesta.send('nofound');
                }else{
                    var token=jwt.sign({
                        usuario:datos.usuario,
                        role:datos.tipo
                    },'secreto',{expiresIn:'120s'});
                    respuesta.send(token);
                }
                
            }
        })
        })
    }
}//fin funcion metodoBD
module.exports=new MetodosDB();