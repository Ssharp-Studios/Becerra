const num = 4;

//      0   1   2   3   4   5
edad = [18, 14, 15, 92, 78, 63];

console.log(edad);
console.log(edad[3]);

// Vector nombres, apellidos, telefono, direccion

nombre = ["Cristian", "Alex", "Isabela", "Maira", "Genshi"];
apellido = ["Ramirez", "Bravo", "Chinga tu madre", "Ocampo", "Cardona"];
edad = [18, 16, 17, 18, 17];
telefono = [111, 222, 333, 444, 555];
direccion = ["Calle 1", "Calle 2", "Avenida 3", "Calle 4", "Carrera 5"];

for (i = 0; i < nombre.length; i++) {
    console.log(nombre[i] + " " + apellido[i] + " " + "\n" +
        "Edad: " + edad[i] + "\n" +
        "Telefono: " + telefono[i] + "\n" +
        "Dirección: " + direccion[i]);
}