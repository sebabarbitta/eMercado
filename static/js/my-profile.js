datasos= {};

function datos() {
    var com = document.getElementById("Nombre").value;
    var apell = document.getElementById("Apellido").value
    var c = document.getElementById("edad").value;
    var a = document.getElementById("email").value;
    var b = document.getElementById("tel").value;
   // var ima = document.getElementById("customFileLang").value;

    var comentario = {
        Nombre: com,
        app: apell,
        edad: c,
        email: a,
        tel: b
       
    }

  
    localStorage.setItem("listaComenUsu", JSON.stringify(comentario));
    location.reload(); 

}

document.addEventListener("DOMContentLoaded", function (e) {
  datasos = JSON.parse(window.localStorage.getItem("listaComenUsu"));

    /* if (datasos != null) {
        comentario = datasos;
        }

       */
  
    document.getElementById("Nombre").value =  datasos.Nombre;
    document.getElementById("Apellido").value = datasos.app;
    document.getElementById("edad").value = datasos.edad;
    document.getElementById("email").value = datasos.email;
    document.getElementById("tel").value = datasos.tel;
 


});

