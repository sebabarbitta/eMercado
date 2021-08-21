//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function control(){

    if (document.form.contrasena.value == '' || document.form.usuario.value== ''){ 
        alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
        } 
        else{ 
            document.form.submit(); 
            window.location.href= "inicio.html";
        } 

    } 
   

document.addEventListener("DOMContentLoaded", function(e){

});