function  Coche  ( marca ,  modelo ,  precio) 
{
    this.marca =  marca;
    this.modelo =  modelo;
    this.precio =  parseFloat (precio);
    
} 

let coche1  =  new  Coche  ( "Renault" ,  "Laguna" ,  1000 ) ;
let coche2  =  new  Coche  ( "Ford" ,  "Mondeo" ,  2300 ) ;
let coche3  =  new  Coche  ( "Mercedes" ,  "600" ,  8500 ) ;
let coche4  =  new  Coche  ( "Seat" ,  "Córdoba" ,  3000 ) ;


let  coche  =  [ coche1 ,  coche2 ,  coche3 ,  coche4 ]

var contenedorHtml  =  document.querySelector ('# contenedor-info-coches') ;

Coche.prototipo.mostrarIva = function() 
{
    return  (this. precio * 21) / 100 ;
}

contenedorHtml.innerHTML  +=  "******************************************* ***** <br> " ;
contenedorHtml.innerHTML  +=  "Habiendo agregado la función al prototipo de Coche <br>" ;
contenedorHtml.innerHTML  +=  "******************************************* ***** <br> " ;

coches.forEach (coche =>  {
    contenedorHtml.innerHTML  +=  'El coche $ { coche . marca } , modelo $ { coche . modelo } , vale $ { coche . precio } dolares, mas un iva de $ { coche . mostrarIva ( ) } <br>' ;
} ); 


functión  calcularIva() 
{
    return  (this.precio * 21) / 100
}


contenedorHtml . innerHTML  +=  "<br> **************************** <br>" ;
contenedorHtml . innerHTML  +=  "Usando la función llamada <br>" ;
contenedorHtml . innerHTML  += "**************************** <br>" ;

coches . forEach (  coche  =>  {
    contenedorHtml . innerHTML  +=  `El coche $ { coche . marca } , modelo $ { coche . modelo } , vale $ { coche . precio } dolares, mas un iva de $ { calcularIva . llamar ( coche ) } <br> ` ;
} ) ;


contenedorHtml . innerHTML  +=  "<br> **************************** <br>" ;
contenedorHtml . innerHTML  +=  "Usando la función aplicar <br>" ;
contenedorHtml . innerHTML  +=  "**************************** <br>" ;

coches . forEach (  coche  =>  {
    contenedorHtml . innerHTML  +=  `El coche $ { coche . marca } , modelo $ { coche . modelo } , vale $ { coche . precio } dolares, mas un iva de $ { calcularIva . aplicar ( coche ) } <br> ` ;
} ) ;
