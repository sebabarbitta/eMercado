//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var id = window.localStorage.getItem('produc');

var librosArray ={};
var todosart={};
var coment =[];
var imagen = [];

function imagenes(img){
  let verimg = "";
  

    for(let i = 0; i < img.length; i++){
    //   let  imagen = img[i];

        verimg = `
      
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
           <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="`+img[0]+`" class="d-block w-10" width="450px" height="200px">
              </div>
              <div class="carousel-item">
                <img src="`+img[1]+`" class="d-block w-10" width="450px" height="200px">
              </div>
              <div class="carousel-item">
                <img src="`+img[2]+`" class="d-block w-10" width="450px" height="200px">
              </div>
              <div class="carousel-item">
                <img src="`+img[3]+`" class="d-block w-10" width="450px" height="200px">
              </div>
           </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
     
        `

        
    }
    document.getElementById("verimagen").innerHTML += verimg;
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

function prodrel(rel){
  let prod = "";


   for(let i = 0; i < rel.length; i++){
       let relacionados = rel[i];
       
       
              prod += `
              
              <div class="list-group-item list-group-item-action" >
              <img src="` + todosart[relacionados].imgSrc + `" width="100px" height="100px" class="img-productos">
      
       <div class="list-group-item list-group-item-action" >
      
               <div class="col">

               <div class="d-flex w-100 justify-content-between">
               
                   <h4 class="mb-1">`+ todosart[relacionados].name +`</h4>
                   
                   <small class="text-muted"> Costo: `+todosart[relacionados].currency+'' + todosart[relacionados].cost + ` </small>
               </div>
               <p class="mb-1">` + todosart[relacionados].description + `</p>
               
               </div>
           </div>
       </div>
       
   `




   }
       
       document.getElementById("rela").innerHTML = prod;
       
            }
  


document.addEventListener("DOMContentLoaded", function(e){
   getJSONData(PRODUCT_INFO_URL + id + ".json"  ).then(function (resultObj) {
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

          getJSONData(PRODUCTS_URL) .then (function(resultado) {
            if (resultObj.status === "ok"){
              todosart = resultado.data;
       
               //productos(arrayproduct);
             prodrel(librosArray.relatedProducts);
            
            }
      
  //      
        }
    
)
})
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
