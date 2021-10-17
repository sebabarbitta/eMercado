
carrito = {};
function subtotcant(costo,i){
    let cantidad = parseInt(document.getElementById(`cant${i}`).value);
    let moneda = carrito[i].currency;

    if (moneda== "USD"){
        subtotal = costo * 40 * cantidad
        }
        else{
        subtotal = costo * cantidad
        }

    document.getElementById(`sub${i}`).innerHTML = `Subtotal:  UYU ` + subtotal;
}

function car(cari){

    let contenido = "";
  
    for(let i = 0; i < cari.length; i++){
        let descrip = cari[i];
         
        if(descrip.currency==="USD") {
            subtotal =    descrip.unitCost * 40  * descrip.count
         
         }else{
             subtotal =  descrip.unitCost   * descrip.count
         }

        contenido += 
        `
       
        <div class="list-group-item list-group-item-action" >
        <img src="` + descrip.src + `"width="100px" height="100px" class="img-productos">
        
                <div class="col">

                <div class="d-flex w-100 justify-content-between">
                
                    <h5 class="mb-1"> Nombre Articulo:`+ descrip.name +`</h5>

                    Cantidad: <input type="number" id="cant${i}" value="`+descrip.count+`" onchange="subtotcant(${descrip.unitCost},${i})" min="1">
                    
                    <small class="text-muted"> Costo: `+descrip.currency+'' + descrip.unitCost + ` </small>
                    <small class="text-muted" id="sub${i}"> Subtotal: UYU `+subtotal+` </small>
                </div>
               
            </div>
        </div>
        
    `


        document.getElementById("car").innerHTML = contenido;
   
} 
 
}
    

document.addEventListener("DOMContentLoaded", function (e) {
    
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            carrito = resultObj.data.articles;

            car(carrito);
        }
        
    })

});