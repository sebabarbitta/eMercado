var cardBanco = document.getElementById('tarjeta-tarjeta')
var cardNum = document.getElementById('nro-tarjeta');
var cardCVV = document.getElementById('codigoseg-tarjeta');
var cardDate = document.getElementById('vto-tarjeta');

var bankAcc = document.getElementById('banco-cta');
var bankNamb = document.getElementById('banco-banco');

var calle  = document.getElementById("Calle");
var esquina = document.getElementById("Esquina");
var nro = document.getElementById("Numero");
var pais  = document.getElementById("Pais");

var enviooo= calle.value + esquina.value + nro.value + pais.value;
var pago = cardNum.value + cardCVV.value + cardDate.value + cardBanco.value + bankAcc.value + bankNamb.value;
var todo = enviooo + pago;
var pay = "";
carrito = {};
//var subs;

function subtotcant(costo,i){
    let cantidad = parseInt(document.getElementById(`cant${i}`).value);
    let moneda = carrito[i].currency;

    if (moneda== "USD"){
        subtotal = costo * 40 * cantidad
        }
        else{
        subtotal = costo * cantidad
        }
      

   // document.getElementById(`sub${i}`).innerHTML = `Subtotal:  UYU ` + subtotal;
   document.getElementById(`sub${i}`).innerHTML =  subtotal;
    subtotalgeneral();
    envio();
    

    }

    function subtotalgeneral(){

        let subtot=0;
        let subart =  document.getElementsByClassName("subtotales");
   
      
        for ( let i = 0; i < subart.length; i++){
        // subb += parseInt(ssub[i].innerHTML);
            
        subtot += parseInt(subart[i].innerHTML);

              //alert(subtot)
        }
       
        document.getElementById(`Subtotal`).innerHTML = subtot;
        
        document.getElementById("total").innerHTML = subtot;


    }
         
     
    function envio(){
     
        let envio = document.getElementById("totalEnvio");  
       
        let pre = document.getElementsByName("envio"); 
    
        for ( var i = 0; i < pre.length; i++){
            // subb += parseInt(ssub[i].innerHTML);
           if (pre[i].checked)   {  
            subtot = parseInt(pre[i].value);
              
                  
        if(subtot == "1"){
            
            envio.innerHTML = (parseInt(document.getElementById("Subtotal").innerHTML)  * 0.15) 
         
        }
        if(subtot == "2"){
            envio.innerHTML = (parseInt(document.getElementById("Subtotal").innerHTML) *0.07).toFixed(0)
            

        }
        if(subtot == "3"){
            envio.innerHTML =(parseInt(document.getElementById("Subtotal").innerHTML) *0.05)
      

        }
    }
    }
    totalgeneral()
}

function totalgeneral(){
    let totgen= 0
    let subtot = parseInt(document.getElementById("Subtotal").innerHTML)
    let enviototal = parseInt(document.getElementById("totalEnvio").innerHTML)
 
    let total = document.getElementById("total")

 totgen = subtot + enviototal

 total.innerHTML  = totgen



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
                   SubTotal UYU:<span class="subtotales" id="sub${i}"> `+subtotal+` </span>
                </div>
               
            </div>
        </div>
        
    `


        document.getElementById("car").innerHTML = contenido;
   
} 

}
/*
function validaciongeneral(){
let elementosDentro = document.getElementsByClassName("formuIn");
let elementosFuera = document.getElementsByClassName("formuOut");
document.getElementById("feedback").innerHTML = "";


for (let i = 0; i < elementosDentro.length; i++) {
    const element = elementosDentro[i];
    if (element.value == "") {
        alert("Debe ingresar un valor del Envio");
    
    }
    for (let a = 0; a< elementosFuera.length; i++){
        const ele = elementosFuera[i];
        if (ele.value == ""){
            alert("Faltan datos en la forma de pago");
        }
    }
    if (ele.value && element.value !== ""){
        alert("Compra relizada correctamente")
    }

}


}*/
function validateCard() {
    pay = "card";
     

     bankAcc.disabled  = true;
     bankNamb.disabled  = true; 
     
     cardNum.disabled = false;
     cardCVV.disabled = false;
     cardDate.disabled  = false; 
     cardBanco.disabled = false; 
  }
  
  function validateBank() {
    pay = "bank";

   
    bankAcc.disabled  = false;
    bankNamb.disabled  = false;

    cardBanco.disabled =true; 
    cardNum.disabled  = true;
    cardCVV.disabled  = true;
    cardDate.disabled  = true; 

  }/*
  function pago() {
    if (pay === "card") {
      if (cardNum.value === "" || cardCVV.value === "" || cardDate.value === "") {
        alert("No se permiten campos vacios");
        return false;
      } else {
        alert("Datos registrados")
        return true;
      }
    }
    if (pay === "bank") {
        if (bankAcc.value === "" || bankNamb.value ==="") {
          alert("No se permiten campos vacios");
          return false;
        } else {
          alert("Datos registrados");
          return true;
        }
      }
  }
*/
function validarform(){



    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        //var form2 = document.getElementsByClassName('needs-validati');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
               

            if(pay === "card"){
               if((cardBanco=="" || cardNum.value == "" || cardCVV.value == "" || cardDate.value == "")){
              alert("Compra incompleta, favor de completar los campos Forma de Pago(Credito)")
              event.preventDefault();
              event.stopPropagation();}

            }
            if(pay==="bank"){
                if(bankAcc.value == "" || bankNamb.value =="") {
                alert("Compra incompleta, favor de completar los campos Forma de Pago(Banco)")
                event.preventDefault();
                event.stopPropagation();}
            }
            if (calle.value == "" || esquina.value=="" || nro.value== "" || pais.value== ""){
                alert("Falta completar campos de envio")
                event.preventDefault();
              event.stopPropagation();

            }
             if(pay === "" ){
              alert("Favor de seleccionar un metodo de pago")
              event.preventDefault();
              event.stopPropagation();
            }
            
           }
            
            form.classList.add('was-validated');
          }, false);

          
        });
      }, false);
  
    
     }
      
    

document.addEventListener("DOMContentLoaded", function (e) {
    
    getJSONData(CART_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            carrito = resultObj.data.articles;

            car(carrito);
            subtotalgeneral();
            envio()
            totalgeneral()
         //   costoenvio()
        }
        
    });

    let radio= document.getElementsByName("envio");
    for (var i = 0; i < radio.length; i++){
        radio[i].addEventListener("change", function(){
       envio()
   });
}

validarform()

    

});