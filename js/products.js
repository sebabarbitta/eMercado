//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

const ORDER_ASC_BY_PRECIO = [];
const ORDER_DESC_BY_PRECIO= [];
const ORDER_BY_PROD_RELEV = "Relev.";
var info = [];
var currentSortCriteria = undefined;
var minCost = undefined;
var maxCost = undefined;

function ordenarPrecios(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRECIO)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PRECIO){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_RELEV){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
} 
  
function mostrar(id) {
    window.localStorage.setItem('produc', id);
    window.location = 'product-info.html';
    
}

function productos(){

    let contenido = "";
    const  buscar = document.getElementById("buscador").value.toLowerCase();
  //   if (buscar !=""){
    /* document.getElementById("buscador").addEventListener('input',function(){
         
         const  buscar = document.getElementById("buscador").value.toLowerCase();
         productos()
         })*/
 
     for(let i = 0; i < info.length; i++){
         let descrip = info[i];
          
         if (((minCost == undefined) || (minCost != undefined && parseInt(descrip.cost) >= minCost)) &&
         ((maxCost == undefined) || (maxCost!= undefined && parseInt(descrip.cost) <= maxCost))){
             //if((buscar == "") || ( descrip.name.toLowerCase().indexOf(buscar) != -1)){  
              if  ( descrip.name.toLowerCase().indexOf(buscar) !== -1)   {

         contenido += ` 
        
         <div class="col-lg-3 col-md-4 col-sm-6">
         <div class="card mb-4 shadow-sm custom-card">
         
         <img src="` + descrip.imgSrc + `" alt="` + descrip.description + `width="100px" height="100px" " class="bd-placeholder-img card-img-top">
        <small class="text-muted"> <button onclick= mostrar(`+ descrip.id +`) class="btn btn-info btn-sm" type= "button"> Info Producto </button> </small> 
                
                
        
                    <h4 class="m-3">`+ descrip.name +`</h4>
                    <div class="card-body">
                    <p><small class="card-text"> Costo: `+descrip.currency+'' + descrip.cost + ` </small><p>
                
                    <p class="card-text">` + descrip.description + `</p>
                    
              
              
                </div>
                </div>
                </div>
       
       
        
    `
}
}
        document.getElementById("prod").innerHTML   = contenido;
   
} 
    
}
//}
function ordenar(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        info = categoriesArray;
    }

    info = ordenarPrecios(currentSortCriteria, info);

    //Muestro las categorías ordenadas
    productos();
}

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL) .then (function(resultado) {
        if (resultado.status === "ok"){
          // arrayproduct = resultado.data;
   
           //productos(arrayproduct);
         ordenar(ORDER_ASC_BY_PRECIO,resultado.data);
        
        }
    });


    document.getElementById("ordenmax").addEventListener("click", function(){
        ordenar(ORDER_ASC_BY_PRECIO);
    });

    document.getElementById("ordenmin").addEventListener("click", function(){
        ordenar(ORDER_DESC_BY_PRECIO);
    });

    document.getElementById("ordenrel").addEventListener("click", function(){
        ordenar(ORDER_BY_PROD_RELEV);
    });

    document.getElementById("limpiarprecio").addEventListener("click", function(){
        document.getElementById("preciomin").value = "";
        document.getElementById("preciomax").value = "";

        minCost = undefined;
        maxCost = undefined;

        productos();
    });
    
  
    document.getElementById("buscador").addEventListener('input',function(){
        
       
        productos()

        });

    document.getElementById("filtrarprecio").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por costo
        
        minCost = document.getElementById("preciomin").value;
        maxCost = document.getElementById("preciomax").value;

        if ((minCost!= undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
            minCost = parseInt(minCost);
        }
        else{
            minCost = undefined;
        }

        if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
            maxCost = parseInt(maxCost);
        }
        else{
            maxCost = undefined;
        }

        productos();
    });
});