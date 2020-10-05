var nombre = "S3RGIO";
i = 0;


// while (i < nombre.length) {
//     console.log(nombre[i]);

//     i++;
// }
console.log("Partimos del nombre: " + nombre);
while (i < nombre.length) {
    if (nombre[i] == "A" || nombre[i] == "E" || nombre[i] == "I" || nombre[i] == "O" || nombre[i] == "U") {
        var string = "He encontrado una vocal: " + nombre[i];

    } else if (isNaN(nombre[i]) == false) {
        var string = "Los nombres de personas no contienen el número:" + nombre[i];
    } else {
        var string = "He encontrado una consonante: " + nombre[i];
    }
    i++;

    console.log(string);
}