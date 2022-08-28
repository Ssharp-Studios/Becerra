"use strict";
// Globales
var h;
(function (h) {
    let c1 = document.getElementById("bt");
    let position = [0,];
    let c = 0;
    let fila = [];
    let ante = "";
    // Funcion randon para las listas
    function randomList(min, max, list) {
        let x = Math.floor((Math.random() * (max - min + 1)) + min);
        let ax = false;
        list.forEach(T => { if (T == x) {
            ax = true;
        } });
        if (ax == false) {
            list.push(x);
        }
        else {
            randomList(min, max, list);
        }
    }
    //Cuando inicia el Clik en el boton
    c1.addEventListener("click", function () {
        let aux1 = [];
        let aux2 = [];
        for (let i = 1; i <= 15; i++) {
            randomList(1, 15, aux1);
            randomList(1, 15, aux2);
        }
        aux1.forEach(T => position.push(T));
        aux2.forEach(T => position.push(T));
    });
    //Ciclo patra evento click
    for (let i = 1; i <= 30; i++) {
        let control = document.getElementById(i.toString());
        control.addEventListener("click", function () {
            if (c == 10) {
                closeAllPosition();
            }
            c += 1;
            control.src = "img/" + position[i] + ".jpg";
            if (c == 2) {
                let aux1 = Comprobar(document.getElementById(ante), control);
                if (aux1 == true) {
                    fila.push(document.getElementById(ante));
                    fila.push(control);
                }
                c = 10;
            }
            ante = control.id;
        });
    }
    // Funcion comprobar
    function Comprobar(antiguo, nuevo) {
        if (antiguo.src == nuevo.src) {
            return true;
        }
        return false;
    }
    // Funcion de cerrar todo
    function closeAllPosition() {
        for (let i = 1; i <= 30; i++) {
            let g = document.getElementById(i.toString());
            g.src = "img/0.jpg";
        }
        fila.forEach(T => T.src = "img/" + position[Number.parseInt(T.id)] + ".jpg");
        c = 0;
    }
})(h || (h = {}));
