const {registro, inscripciones, readLineSync} = require('./registro');

let num = readLineSync.question("Ingrese la Cantidad de alumnos: ");
inscripciones(num);

