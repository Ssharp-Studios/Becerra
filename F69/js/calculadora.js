function agregaN1(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 1;
}
function agregaN2(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 2;
}
function agregaN3(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 3;
}
function agregaN4(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 4;
}
function agregaN5(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 5;
}
function agregaN6(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 6;
}
function agregaN7(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 7;
}
function agregaN8(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 8;
}
function agregaN9(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 9;
}
function agregaN0(e){
    e.preventDefault();
    let res = document.getElementById("res");
    res.value += 0;
}
function mas(e){
    let res = document.getElementById("res");
    let oculto = document.getElementById("oculto");
    let opera = document.getElementById("opera");
    opera.value = 1;
    oculto.value = res.value;
    res.value="";
}
function menos(e){
    let res = document.getElementById("res");
    let oculto = document.getElementById("oculto");
    let opera = document.getElementById("opera");
    opera.value = 2;
    oculto.value = res.value;
    res.value="";
}
function igual(e){
    let res = document.getElementById("res");
    let oculto = document.getElementById("oculto");
    let opera = document.getElementById("opera");
    if ( opera.value == 1 ){
        res.value = parseInt(oculto.value) + parseInt(res.value);
    } else {
        res.value = parseInt(oculto.value) - parseInt(res.value);
    }
    oculto.value = "";
}