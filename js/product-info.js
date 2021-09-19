//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var id = window.localStorage.getItem('produc');
var librosArray ={};
var coment =[];
var imagen = [];

function imagenes(img){
  let verimg = "";
  

    for(let i = 0; i < img.length; i++){
       let  imagen = img[i];

        verimg += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="`+imagen+`"width="200px" height="200px">
            </div>
        </div>
        `

        document.getElementById("verimagen").innerHTML = verimg;
    }
}

function estrellas(estre){
  let comentpuntua = "";

  
  if (estre === 1){
    comentpuntua=
   `<span class="fa fa-star checked"></span>`+
   `<span class="fa fa-star"></span>`+
   `<span class="fa fa-star"></span>`+
   `<span class="fa fa-star"></span>`+
   `<span class="fa fa-star"></span>`
  }
  if (estre === 2){
    comentpuntua=
   `<span class="fa fa-star checked"></span>`+
   `<span class="fa fa-star checked"></span>`+
   `<span class="fa fa-star"></span>`+
   `<span class="fa fa-star"></span>`+
   `<span class="fa fa-star"></span>`
  }
  if(estre === 3){
    comentpuntua=
    `<span class="fa fa-star checked"></span>`+
    `<span class="fa fa-star checked"></span>`+
    `<span class="fa fa-star checked"></span>`+
    `<span class="fa fa-star"></span>`+
    `<span class="fa fa-star"></span>`

  }
  if(estre === 4){
    comentpuntua=
    `<span class="fa fa-star checked"></span>`+
    `<span class="fa fa-star checked"></span>`+
    `<span class="fa fa-star checked"></span>`+
    `<span class="fa fa-star checked"></span>`+
    `<span class="fa fa-star"></span>`
  }
  if(estre === 5){
    comentpuntua=
    `<span class="fa fa-star checked"></span>`+
    `<span class="fa fa-star checked"></span>`+
    `<span class="fa fa-star checked"></span>`+
    `<span class="fa fa-star checked"></span>`+
    `<span class="fa fa-star checked"></span>`
  }


document.getElementById("descrpuntua").innerHTML = comentpuntua;
  
}

function agregar(){
  let coment = document.getElementById("comentarios").value;

  
  let agregoC = "";
 
  
  agregoC += `
       
  <div class="list-group-item list-group-item-action" > 
          <div class="col">
          <p class="mb-1"> Nuevo Comentario: ` + coment + `</p> 
 
      </div>
  </div>
  
`

document.getElementById("descrcoment").innerHTML += agregoC;


}
document.addEventListener("DOMContentLoaded", function(e){
   getJSONData(PRODUCT_INFO_URL + id + ".json" ).then(function (resultObj) {
        if (resultObj.status === "ok") {
            librosArray = resultObj.data;

      
            let artNameHTML  = document.getElementById("Nombreart");
            let artDescriptionHTML = document.getElementById("Descriart");
            let artcosto = document.getElementById("Costoart");

          
        
            artNameHTML.innerHTML = librosArray.name;
            artDescriptionHTML.innerHTML = librosArray.description;
            artcosto.innerHTML += librosArray.currency
            artcosto.innerHTML += librosArray.cost;
      
         imagenes(librosArray.images);
          }
  //      
        }
    
)
});
      

document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(PRODUCT_INFO_COMMENTS_URL + id + ".json").then(function (resultObj) {
      if (resultObj.status === "ok") {
          
          coment = resultObj.data;
         
         
          let comentdescrip = document.getElementById("descrcoment");    
         comentdescrip.innerHTML = coment.description;
       
         estrellas(coment.score);

      }
  });
});




 

