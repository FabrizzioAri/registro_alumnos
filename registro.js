const readLineSync = require('readline-sync');
const registro=()=>{
        var nombre = readLineSync.question("Ingrese Nombre: ");
        let edad = readLineSync.question("Ingrese Edad:");
        var alumno= {
            Nombre : nombre,
            Edad : edad,
            };
    return alumno;
}

const inscripciones =(num)=>{
    let rep = num;
    let Alumnos = [];
    for (let i = 0; i< rep; i++){
        var alumno = registro();
        Alumnos.push({alumno});
    }

    console.log("Los Alumnos Registrados son= ", Alumnos);

}


module.exports = {registro, inscripciones, readLineSync};
