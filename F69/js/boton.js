btnN1 = document.getElementById("btn-N1");
btnN2 = document.getElementById("btn-N2");
btnN3 = document.getElementById("btn-N3");
btnN4 = document.getElementById("btn-N4");
btnN5 = document.getElementById("btn-N5");
btnN6 = document.getElementById("btn-N6");
nombre = document.getElementById("nombre");

btnN1.addEventListener("click", function(){
    alert("Maria");
})

btnN2.addEventListener("click", function(){
    alert("Pedro");
})
function mostrarTexto(){
    alert(nombre.value);
}
btnN3.addEventListener("click", mostrarTexto);


btnN5.addEventListener("click", function(){
    alert("Fracia");
})

btnN6.addEventListener("click", function(){
    alert("Ximena");
})

nombre.addEventListener("mousemove", mostrarTexto);

// nombre.addEventListener("keydown", mostrarTexto);




// btnN2.addEventListener("click", imprimir);
// function imprimir(){                             OTRA MANERA DE HACER LA FUNCION
//     alert("Nombre")
// }   

