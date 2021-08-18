//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
let arrayproduct = [];
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


document.addEventListener("DOMContentLoaded", function (e) {

    getJSONData(PRODUCTS_URL) .then (function(resultado) {
        if (resultado.status === "ok"){
           arrayproduct = resultado.data;
   
           productos(arrayproduct);
        }
    }
    )});