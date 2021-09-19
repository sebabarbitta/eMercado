//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var id = window.localStorage.getItem('produc');
var librosArray =[];
var coment =[];


function imagenes(img){
  let verimg = "";

    for(let i = 0; i < img.length; i++){
        let imagen = img[i];

        verimg += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src=";` + imagen + `"width="100px" height="100px alt=">
            </div>
        </div>
        `

        document.getElementById("verimagen").innerHTML = verimg;
    }
}

document.addEventListener("DOMContentLoaded", function(e){
   getJSONData(PRODUCT_INFO_URL + id + ".json" ).then(function (resultObj) {
        if (resultObj.status === "ok") {
            librosArray = resultObj.data;

         //   let src = "img/prod"+librosArray.id+ ".jpg"
          //  let img = document.getElementById("verimagen");
            let artNameHTML  = document.getElementById("Nombreart");
            let artDescriptionHTML = document.getElementById("Descriart");
            let artcosto = document.getElementById("Costoart");

          
        
            artNameHTML.innerHTML = librosArray.name;
            artDescriptionHTML.innerHTML = librosArray.description;
            artcosto.innerHTML += librosArray.currency
            artcosto.innerHTML += librosArray.cost;
         //   img.innerHTML += '<img src="'+src+'"width="100px" height="100px">';
         imagenes(librosArray.images)
          }
  //      
        }
    
)
});
      

document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(PRODUCT_INFO_COMMENTS_URL + id + ".json").then(function (resultObj) {
      if (resultObj.status === "ok") {
          
          coment = resultObj.data;
          estrella= coment.score;
         
          let comentdescrip = document.getElementById("descrcoment");
          let comentpuntua = document.getElementById("descrpuntua");
         
      
         comentdescrip.innerHTML = coment.description;
       
       if(estrella == 1){
       1 =  
        '<span class="fa fa-star checked"></span>'
      }
         comentpuntua.innerHTML = coment.score;


      }
  });
});




 

