//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var id = window.localStorage.getItem('produc');
var librosArray =[];

function mostrarproduct(descrip) {
  //  let contenido = "";
    //let des = librosArray;
   // let src = "img/" + libro.titulo + "/1.jfif";
    
    //    contenido += 'Nombre: ' + descrip.name + '<br>';
    //    contenido += 'Descripcion: ' + descrip.description + '<br>';
     //   contenido += 'Costo: ' + descrip.currency + '' + descrip.cost+ '<br>';
        
       // contenido += '<img src="'+src+'" width="500" height="600">';
      //  contenido += '<br><hr><br>'


      
}

    

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL + id + ".json").then(function (resultObj) {
        if (resultObj.status === "ok") {
            librosArray = resultObj.data;

            category = resultObj.data;

            let artNameHTML  = document.getElementById("Nombreart");
            let artDescriptionHTML = document.getElementById("Descriart");
            let artcosto = document.getElementById("Costoart");
           // let productCriteriaHTML = document.getElementById("productCriteria");
        
            artNameHTML.innerHTML = librosArray.name;
            artDescriptionHTML.innerHTML = librosArray.description;
            artcosto.innerHTML += librosArray.currency
            artcosto.innerHTML += librosArray.cost;
  
  //          mostrarproduct(librosArray);
        }
    });


});
 
 

