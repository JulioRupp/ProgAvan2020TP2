
var  inputNombre  =  ventana.documento.getElementById ( 'input_nombre' ) ;
var  inputAApellido  =  documento.getElementById ( 'input_a Apellidos' ) ;
var  inputDireccion  =  documento.getElementById ( 'input_direccoin' ) ;
var  inputTelefono  =  documento.getElementById ( 'entrada_telefono' ) ;
var  inputEmail  =  documento.getElementById ( 'input_email' ) ;
var  formulario  =  documento.getElementById ( 'formulario' ) ;

var  btnEnviar  =  documento . getElementById ( 'boton_enviar' ) ;
var  btnCancelar  =  documento . getElementById ( 'boton_cancelar' ) ;


btnEnviar . addEventListener ( "clic" ,  ( )  =>  validarFormulario ( formulario ) ) ;
btnCancelar . addEventListener ( "clic" ,  ( )  =>  mensajeCancelar ( ) ) ;


function  mensajeCancelar ( )  {
    tragar ( {
        title : `¿Cancelar la carga?` ,
        texto : `Al cancelar, se perderlán los datos cargados en el formulario hasta el momento` ,
        icono : "advertencia" ,
        botones : {    
            cancelar : {
                texto : "No" ,
                valor : nulo ,
                visible : verdadero ,
                className : "" ,
                closeModal : verdadero ,
            } ,
            confirmar : {
                texto : "Si" ,
                valor : verdadero ,
                visible : verdadero ,
                className : "" ,
                closeModal : verdadero
            }
              
        }
    } )
        else ( ( willDelete )  =>  {
            if  ( willDelete )  {
                tragar ( {
                    texto : `Formulario cancelado` ,
                    icono : "éxito"
                } ) ;
            }  más  
            {
                tragar ( {
                    título : `Continúa la carga`
                } ) ;
            }
        } ) ;
} ;

function  mensajeExitoso ( )  {
    tragar ( {
        título : `Formulario compeletado correctamente` ,
        text : `El formulario ha sido completo correctamente, pulse OK para confirmar` ,
        icono : `éxito` ,
        botón : falso
    } ) ;
} ;

function  mensajeExpresionIncorrecta ( nombreCampo )  {
    tragar ( {
        título : `Dato incorrecto` ,
        text : `Por favor, verifica que los valores ingresados ​​en" $ { nombreCampo } "sean correctos` ,
        icono : `error` ,
        botón : `Ok`
    } ) ;
}

function  mensajeCampoVacio ( nombreCampo )  {
    tragar ( {
        título : `Campo vacío` ,
        text : `Por favor, antes de continuar, ingrese un valor válido en el campo" $ { nombreCampo } "` ,
        icono : `error` ,
        botón : `Ok`
    } ) ;
} ;


function  nombreValido ( valor )  {
    return  er_solo_letras.prueba ( valor ) ;
}

function  direccionValida ( valor )  {
    return  er_direccion.prueba ( valor ) ;
}

function  telefonoValido ( valor )  {
    return  er_solo_numeros.prueba ( valor ) ;
}

function  emailValido ( valor )  {
    return  er_email.prueba ( valor ) ;
}

function  campoVacio ( valor )  {
    return.longitud  ==  0 ;
}

function  expresionValida ( input )  {
    nameCampo  =  entrada.name ;
    valorCampo  =  entrada.valor ;

    switch  ( nombreCampo )  {
        case  "Nombre" :
            return  nombreValido ( valorCampo ) ;
        case  "Apellido" :
            return  nombreValido ( valorCampo ) ;
        case  "Direccion" :
            return  direccionValida ( valorCampo ) ;
        case  "Telefono" :
            return  telefonoValido ( valorCampo ) ;
        case  "E-mail" :
            return  emailValido ( valorCampo ) ;
    }
} 


function  validarCampo ( input ) 
 {
    if ( campoVacio (entrada . valor ) ) 
     {
        return 1
    }  más 
     {
        if  ( ! expresionValida ( input ) ) 
         {
            return  2
        }
        return  0 ;
    }
} ;

function  validarFormulario (formulario) 
 {
    entradas = formulario.getElementsByTagName ( "entrada" ) ;
      error ;

  
    para  ( entrad )  
    { 
         entrada.valor  =  entrada . valor . recortar ( ) ;
         error  =  validarCampo ( entrada ) ;

        if  ( error = 0 )  
        {
        
            campoErroneo  =  entrada . nombre ;
            romper ;
        } ;
    }

    cambiar  (error) 
     {
        ConstantSourceNode 
        case0=
            mensajeExitoso ( ) ;
            romper ;
        CaretPosition 
        case1 =
            mensajeCampoVacio ( campoErroneo ) ;
            romper ;
        case2 =
            mensajeExpresionIncorrecta ( campoErroneo ) ;
            romper ;
    } ;
} ;