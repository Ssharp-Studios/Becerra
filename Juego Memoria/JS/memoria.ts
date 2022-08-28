let position: Array<number> = [0]; // Tabla de pocisiones
let c: number = 0; // Cuantas veces se a pulsado en el tablero
let fila: Array<HTMLImageElement> = []; // Elemetos ya adivinados
let ante: string = ""; // ID del antiguo elemento clickeado

// Ejecuta ramdon y rellena las listas
{
    let a: Array<number> = [];
    let b: Array<number> = [];
    // Ejecuta
    while (a.length < 15 && b.length < 15) {
        for (let i = 1; i <= 15; i++) {
            let rnd = Math.floor((Math.random() * (15 - 1 + 1)) + 1);
            let aux1 = a.indexOf(rnd);
            let aux2 = b.indexOf(rnd);
            if (aux1 == -1) { a.push(rnd) }
            if (aux2 == -1) { b.push(rnd) }
        }
    }
    a.forEach(T => position.push(T));
    b.forEach(T => position.push(T));
}

//Ciclo patra evento click
for (let i = 1; i <= 30; i++) {
    (document.getElementById(i.toString()) as HTMLImageElement).addEventListener("click", function () { EventBT(document.getElementById(i.toString()) as HTMLImageElement, i) });
}

// Evento
function EventBT(e: HTMLImageElement, i: number) {
    if (c == 10) { closeAllPosition() }
    c += 1;
    e.src = "img/" + position[i] + ".jpg";
    if (c == 2) {
        let aux1 = (document.getElementById(ante) as HTMLImageElement).src == e.src
        if (aux1 == true) { fila.push(document.getElementById(ante) as HTMLImageElement) && fila.push(e); }
        c = 10;
    }
    ante = e.id;
}

// Cierra las posiciones
function closeAllPosition() {
    for (let i = 1; i <= 30; i++) { let g = (document.getElementById(i.toString()) as HTMLImageElement).src = "img/0.jpg"; }
    fila.forEach(T => T.src = "img/" + position[Number.parseInt(T.id)] + ".jpg");
    c = 0;
}