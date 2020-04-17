const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'

}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}



const argv = require('yargs')
    .command('crear', 'Este comando crea una tarea por hacer', {
        descripcion: descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion: descripcion,
        completado: completado
    })
    .command('borrar', 'Borra una tarea del listado', {
        descripcion: descripcion
    })
    .help()
    .argv;



module.exports = {
    argv
}