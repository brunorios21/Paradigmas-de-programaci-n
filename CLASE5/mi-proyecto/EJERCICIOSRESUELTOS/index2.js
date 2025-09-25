// Primer ejercicio resuelto

// ACTIVIDAD 1
// Dada una lista de empleados, obtené el empleado con mayor salario.
//Lista de empleados
const salarios = [
    { n: "Ana", s: 50 },
    { n: "Luis", s: 80 },
    { n: "Sol", s: 70 },
];
// Solución usando reduce
// acc es el acumulador, e es el elemento actual
// Si el salario del elemento actual es mayor que el del acumulador, el acumulador toma el valor del elemento actual
// Al final, el acumulador tendrá el empleado con mayor salario

const r1 = salarios.reduce((acc, e) => {
    acc = (e.s > acc.s) ? e : acc;
    console.log(acc);
    return acc;
});
console.log(r1);

// ACTIVIDAD 2
// Obtener los totales por categoría. Para simplificar, "c" corresponde a categoría y "p" a precio.
const productos = [
    { c: "libros", p: 100 },
    { c: "Juguetes", p: 200 },
    { c: "libros", p: 50 },
];
// Solución usando reduce
// acc es el acumulador, e es el elemento actual
// Si la categoría del elemento actual no existe en el acumulador, se inicializa en 0
// Luego se suma el precio del elemento actual al total de su categoría en el acumulador
// Al final, el acumulador tendrá los totales por categoría
const resul = productos.reduce((acc, e) => {
    acc[e.c] = (acc[e.c] || 0) + e.p;
    return acc;
}, {});
console.log(resul); // { libros: 150, Juguetes: 200 }

// ACTIVIDAD 3
// Una tienda registra sus clientes, productos y ventas por identificadores numéricos.
// Se pide: Construir un nuevo arreglo llamado "r" que contenga, para cada venta, un objeto con la información completa del cliente y del producto asociados.

const productos2 = [
    { id_producto: 1, descripcion: "Monopatin" },
    { id_producto: 2, descripcion: "Ropa" },
];

const clientes = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ludmila" },
    { id: 3, nombre: "Maria" },
];

const ventas = [
    { cliente: 1, producto: 2 },
    { cliente: 2, producto: 1 },
    { cliente: 1, producto: 2 },
    { cliente: 3, producto: 1 },
];
// Estructura esperada de cada elemento:
const r2 = ventas.map((v) => {
    return {
        //
        cliente: clientes.find((c) => c.id === v.cliente),
        producto: productos2.find((p) => p.id_producto === v.producto),
    };
});
console.log(r2);
// Ordenar el resultado por id de cliente
const ordenados = r.sort ( (a, b) => a.cliente.id - b.cliente.id );
console.log(ordenados);

//Juego de fútbol
// Se tiene un arreglo de jugadores y otro con las anotaciones realizadas en distintos partidos.
// Cada jugador tiene un id, nombre, género y comisión a la que pertenece (c1 o c2).
const jugadores = [
    {id: 1, nombre: "Lionel Messi", genero: "M", comision: "c1"},
    {id: 2, nombre: "Cristiano Ronaldo", genero: "M", comision: "c2"},
    {id: 3, nombre: "Neymar Jr", genero: "M", comision: "c1"},
    {id: 4, nombre: "Alex Morgan", genero: "F", comision: "c2"},
    {id: 5, nombre: "Megan Rapinoe", genero: "F", comision: "c1"},
];

const anotaciones = [
    {jugadorId: 1, goles: 2, asistencia: 5, tarjetas: 2}, 
    {jugadorId: 2, goles: 1, asistencia: 3, tarjetas: 1},
    {jugadorId: 3, goles: 0, asistencia: 1, tarjetas: 0},
    {jugadorId: 1, goles: 1, asistencia: 0, tarjetas: 1},
    {jugadorId: 2, goles: 2, asistencia: 2, tarjetas: 0},
    {jugadorId: 3, goles: 1, asistencia: 4, tarjetas: 1},
    {jugadorId: 1, goles: 0, asistencia: 1, tarjetas: 0},
];

// Se pide:
// Relacionar cada anotacion con su jugador.
//ejercicio 
//USAMOS EL METODO MAP (PORQUE QUEREMOS TRANSFORMAR CADA ELEMENTO DEL ARREGLO ANOTACIONES)
const resultado = anotaciones.map( 
    (a) => {
    //BUSCAMOS EL JUGADOR CORRESPONDIENTE A LA ANOTACION ACTUAL
        const jugador = jugadores.find((j) => j.id === a.jugadorId);
    //RETORNAMOS UN NUEVO OBJETO QUE CONTIENE LAS PROPIEDADES DE A Y UNA NUEVA PROPIEDAD LLAMADA JUGADOR
        return {...a, "jugador": jugador };
    }
);
console.log(resultado);
//otener los goles totales por jugador
//USAMOS EL METODO REDUCE (PORQUE QUEREMOS AGRUPAR LOS ELEMENTOS DEL ARREGLO SEGUN UNA CLAVE)

const golesPorJugador = resultado.reduce(
    //utilizamos un objeto acumulador para almacenar los goles por jugador
    (acc, e) => {
        //si el jugador no existe en el acumulador, inicializamos su valor en 0
        //luego sumamos los goles de la anotacion actual al total del jugador
        acc[e.jugadorId] = (acc[e.jugadorId] || 0) + e.goles;
        //retornamos el acumulador actualizado
        return acc;
    },{}
);

console.log(golesPorJugador);

// OBJETO  transformarlo en un array
// Object.entries...
const ranking = Object.entries(golesPorJugador).map(([jugadorId, goles]) => {
    //buscar el jugador correspondiente al id actual
    const jugador = jugadores.find(()=> j.id === Number (jugadorId) );
    //retornar un nuevo objeto con el jugador y sus goles
    return { jugador: jugador, "goles": goles };
});