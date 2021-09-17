//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var id = window.localStorage.getItem('produc');
var librosArray =[];
var coment =[];

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
   getJSONData(PRODUCT_INFO_URL + id + ".json" ).then(function (resultObj) {
        if (resultObj.status === "ok") {
            librosArray = resultObj.data;

            let artNameHTML  = document.getElementById("Nombreart");
            let artDescriptionHTML = document.getElementById("Descriart");
            let artcosto = document.getElementById("Costoart");
           // let productCriteriaHTML = document.getElementById("productCriteria");
        
            artNameHTML.innerHTML = librosArray.name;
            artDescriptionHTML.innerHTML = librosArray.description;
            artcosto.innerHTML += librosArray.currency
            artcosto.innerHTML += librosArray.cost;
          }
  //          mostrarproduct(librosArray);
        }
    
)
});
      

document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
      if (resultObj.status === "ok") {
          
          coment = resultObj.data;

         
          let comentdescrip = document.getElementById("descrcoment");
          let comentpuntua = document.getElementById("descrpuntua");
         // let productCriteriaHTML = document.getElementById("productCriteria");
      
         comentdescrip.innerHTML = coment.description;
         comentpuntua.innerHTML = coment.score;

//          mostrarproduct(librosArray);
      }
  });
});




 

