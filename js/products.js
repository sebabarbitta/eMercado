//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COUNT = "Cant.";
var currentCategoriesArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

function sortCategories(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.productCount);
            let bCount = parseInt(b.productCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
} 

function productos(info){

    let contenido = "";

    for(let i = 0; i < info.length; i++){
        let descrip = info[i];

        contenido += `
        <a href="product-info.html" class="list-group-item list-group-item-action">
       
        <div class="productos" >
        <img src="` + descrip.imgSrc + `" alt="` + descrip.description + `width="100px" height="100px" " class="img-productos">
                <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">`+ descrip.name +`</h4>
                    <small class="text-muted"> Costo: `+descrip.currency+` ` + descrip.cost + ` </small>
                </div>
                <p class="mb-1">` + descrip.description + `</p>
            </div>
        </div>
        </a>
    `

        document.getElementById("prod").innerHTML = contenido;
    }
}
function ordenar(sortCriteria, categoriesArray){
    currentSortCriteria = sortCriteria;

    if(categoriesArray != undefined){
        currentCategoriesArray = categoriesArray;
    }

    currentCategoriesArray = sortCategories(currentSortCriteria, currentCategoriesArray);

    //Muestro las categorías ordenadas
    productos();
}

document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL) .then (function(resultado) {
        if (resultado.status === "ok"){
           arrayproduct = resultado.data;
   
           productos(arrayproduct);
           ordenar(ORDER_ASC_BY_NAME,resultado.data);
        }
    }
    )});
    document.getElementById("ordenmax").addEventListener("click", function(){
        ordenar(ORDER_ASC_BY_NAME);
    });

    document.getElementById("ordenmin").addEventListener("click", function(){
        ordenar(ORDER_DESC_BY_NAME);
    });

    document.getElementById("ordenrel").addEventListener("click", function(){
        ordenar(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("limpiarprecio").addEventListener("click", function(){
        document.getElementById("preciomin").value = "";
        document.getElementById("preciomax").value = "";

        minCount = undefined;
        maxCount = undefined;

        productos();
    });

    document.getElementById("filtrarprecio").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("preciomin").value;
        maxCount = document.getElementById("preciomax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        productos();
    });
