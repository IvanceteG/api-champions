
// array con datos de equipos de la champions
const equipos = [
    { id: 1, nombre: "Real Madrid" },
    { id: 2, nombre: "Barcelona" },
    { id: 3, nombre: "Bayern Munich" }
];


export function leerEquipos(req, res){
    console.log('Controlador corriendo');
    res.json({
        mensaje: "Lista de equipos de controlador",
        equipos: equipos,
    })
}