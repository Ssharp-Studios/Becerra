"use strict";
let aux1 = document.getElementById("c1");
let btnRes = document.getElementById("resultado");
let aux = [aux1];
let colores = ["red", "blue", "green", "yellow", "purple", "orange", "gray"];
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
setInterval(() => {
    aux[aux.length - 1].style.background = "white";
    let num = random(1, 15);
    let s = ("c" + num);
    let d = random(0, colores.length - 1);
    let n = document.getElementById(s);
    n.style.background = colores[d];
    aux.push(n);
}, 100);
setInterval(() => {
}, 100);
