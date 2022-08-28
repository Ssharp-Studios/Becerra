// Globales

namespace h{
let c1 = document.getElementById("bt") as HTMLElement;
let position: Array<number> = [0,];
let c: number = 0;
let fila: Array<HTMLImageElement> = [];
let ante: string = "";

// Funcion randon para las listas
function randomList(min: number, max: number, list: Array<number>): void {
    let x = Math.floor((Math.random() * (max - min + 1)) + min);
    let ax: boolean = false;
    list.forEach(T => { if (T == x) { ax = true; } });

    if (ax == false) { list.push(x) }
    else { randomList(min, max, list); }
}

//Cuando inicia el Clik en el boton
c1.addEventListener("click", function () {
    let aux1: Array<number> = []
    let aux2: Array<number> = []
    for (let i = 1; i <= 15; i++) {
        randomList(1, 15, aux1);
        randomList(1, 15, aux2);
    }
    aux1.forEach(T => position.push(T));
    aux2.forEach(T => position.push(T));
});

//Ciclo patra evento click
for (let i = 1; i <= 30; i++) {

    let control = document.getElementById(i.toString()) as HTMLImageElement;

    control.addEventListener("click", function () {

        if (c == 10) { closeAllPosition();}
        c += 1;
        control.src = "img/" + position[i] + ".jpg";
        if (c == 2) {
            let aux1 = Comprobar(document.getElementById(ante) as HTMLImageElement, control);

            if (aux1 == true) {
                fila.push(document.getElementById(ante) as HTMLImageElement);
                fila.push(control);
            }
            c = 10;
        }
        ante = control.id;
    });
}

// Funcion comprobar
function Comprobar(antiguo: HTMLImageElement, nuevo: HTMLImageElement): boolean {
    if (antiguo.src == nuevo.src) {return true;}
    return false;
}

// Funcion de cerrar todo
function closeAllPosition() {
    for (let i = 1; i <= 30; i++) {
        let g = document.getElementById(i.toString()) as HTMLImageElement;
        g.src = "img/0.jpg";
    }
    fila.forEach(T => T.src = "img/" + position[Number.parseInt(T.id)] + ".jpg");
    c = 0;
}
}