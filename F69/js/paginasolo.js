let nombre = document.getElementById("nombre");
let contrasena = document.getElementById("contrasena");
let btnValida = document.getElementById("btn-valida");
let mensaje = document.getElementById("mensa");
let prueba = document.getElementById("prueba");
let borrar = document.getElementById("borrar");


borrar.addEventListener("click", borre);
btnValida.addEventListener("click", validar);


function borre(){
    prueba.classList.remove("fondo", "fondo2")
}
function validar(){
    if (contrasena.value == "")
    console.log("Está en blanco");
    contrasena.style.borderColor="red";
    mensaje.classList.add("fondo");
    prueba.classList.add("fondo")
    mensaje.innerHTML = "Contraseña vacia"
}

