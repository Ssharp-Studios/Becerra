"use strict";
let position = [0]; // Tabla de pocisiones
let c = 0; // Cuantas veces se a pulsado en el tablero
let fila = []; // Elemetos ya adivinados
let ante = ""; // ID del antiguo elemento clickeado
// Ejecuta ramdon y rellena las listas
{
    let a = [];
    let b = [];
    // Ejecuta
    while (a.length < 15 && b.length < 15) {
        for (let i = 1; i <= 15; i++) {
            let rnd = Math.floor((Math.random() * (15 - 1 + 1)) + 1);
            let aux1 = a.indexOf(rnd);
            let aux2 = b.indexOf(rnd);
            if (aux1 == -1) {
                a.push(rnd);
            }
            if (aux2 == -1) {
                b.push(rnd);
            }
        }
    }
    a.forEach(T => position.push(T));
    b.forEach(T => position.push(T));
}
//Ciclo patra evento click
for (let i = 1; i <= 30; i++) {
    document.getElementById(i.toString()).addEventListener("click", function () { EventBT(document.getElementById(i.toString()), i); });
}
// Evento
function EventBT(e, i) {
    if (c == 10) {
        closeAllPosition();
    }
    c += 1;
    e.src = "img/" + position[i] + ".jpg";
    if (c == 2) {
        let aux1 = document.getElementById(ante).src == e.src;
        if (aux1 == true) {
            fila.push(document.getElementById(ante)) && fila.push(e);
        }
        c = 10;
    }
    ante = e.id;
}
// Cierra las posiciones
function closeAllPosition() {
    for (let i = 1; i <= 30; i++) {
        let g = document.getElementById(i.toString()).src = "img/0.jpg";
    }
    fila.forEach(T => T.src = "img/" + position[Number.parseInt(T.id)] + ".jpg");
    c = 0;
}
