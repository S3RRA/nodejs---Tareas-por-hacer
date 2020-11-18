//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const tareas = require('./porhacer/porhacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = tareas.getListado();
        console.log('================= TAREAS ================='.green);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            if (tarea.completado === true) {
                console.log('Estado: completado');
            } else {
                console.log('Estado: no completado');
            }
            console.log('_____________________')
        }
        console.log('================= FIN TAREAS ================='.green);
        break;

    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');
}