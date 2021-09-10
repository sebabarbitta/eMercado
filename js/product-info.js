//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var id = window.localStorage.getItem('produc');
var librosArray;

function mostrarproduct(des) {
    let contenido = "";
   // let src = "img/" + libro.titulo + "/1.jfif";
    
        contenido += 'Nombre: ' + des.name + '<br>';
        contenido += 'Descripcion: ' + des.description + '<br>';
        contenido += 'Costo: ' + des.currency + '' + des.cost+ '<br>';
        
       // contenido += '<img src="'+src+'" width="500" height="600">';
        contenido += '<br><hr><br>'


        document.getElementById("info").innerHTML = contenido;
}
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL + id + ".json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            librosArray = resultObj.data;


            mostrarproduct(librosArray);
        }
    });


});
 
 

