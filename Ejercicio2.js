let claves = Object.keys (datosApi);
claves.forEach (clave) =>
 {
    document.write (`$ {clave}: $ {datosApi [clave]} <br>`)
}

const  agregarArtistasHtml = (arrayArtistas) =>
{
    html  = '' 
     arrayArtistas.forEach (artista) =>
     {
        html +=  
                <tr>
                    <td> {artista.name} </td>
                    <td> {artista.playcount} </td>
                    <td> {artista.oyentes} </td>
                </tr>
    } 

    document.querySelector ( "# cuerpo-tabla" ).innerHTML +=html 
} 


const  obtenerDatos = async(cantidad)=>  
{
    const  api_key =  "0a4c3723d8420fb7efe3797c4d4322a3" ;
    const  url =  `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key= $ { api_key } & format = json & limit = $ { cantidad } ` ;

    prueba 
    {
        const respuesta = esperar  buscar(url);
        const datosJson = aguardar  return.json();
        agregarArtistasHtml (datosJson.artistas.artista);
    } 
     captura(error) 
     {
        console.log ('Error: ${ error }') 
    }
} 
obtenerDatos ( 10 )