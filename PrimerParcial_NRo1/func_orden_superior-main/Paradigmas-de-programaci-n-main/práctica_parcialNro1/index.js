/*
                                                            Clase 24-09-2025
                                                            ----------------
                            Paradigmas de programación
                            Comisión C1 + C2 - Virtual.
                            --------------------------
 */


// Ejercicio 1: Máximo por propiedad
//              Dada una lista de empleados, obtené el empleado con mayor salario.

const salarios = [{ n: "Ana", s: 50 }, { n: "Luis", s: 80 }, { n: "Sol", s: 70 }];

const respuesta =
    //Usamos el metodo .reduce para recorrer el array y obtner el empleado con mayor salario
    salarios.reduce(
        //El acc, e es el acumulador y (e) el elemento actual
        (acc, e) => {
            //Si el salario del elemento actual es mayor que el del acumulador, el acumulador toma el valor del elemento actual
            acc = (e.s > acc.s) ? e : acc;
            //Al final, el acumulador tendrá el empleado con mayor salario
            //retornar el acumulador para la siguiente iteración
            return acc;
        }
    )
console.log(respuesta);


// Ejercicio 2: obtener los totales por categoría.

const productos = [
    { c: "libros", p: 100 },
    { c: "Juguetes", p: 200 },
    { c: "libros", p: 50 },
];

const resul = productos.reduce(
    (acc, e) => {
        acc[e.c] = (acc[e.c] || 0) + e.p;
        return acc;
    }, {});

console.log(resul);

// Ejercicio 3:
// Una tienda registra sus clientes, productos y ventas por identificadores numéricos.
// Disponés de tres arreglos:
// productos: lista de objetos con id_producto y descripcion.
// clientes: lista de objetos con id y nombre.
// ventas: lista de objetos donde cada elemento indica una venta con las claves cliente (id del cliente) y producto (id del producto).
// Se pide:
// Construir un nuevo arreglo llamado r que contenga, para cada venta, un objeto con la información completa del cliente y del producto asociados. La estructura de cada elemento debe ser:
// {
//   cliente: { id: <number>, nombre: <string> },
//   producto: { id_producto: <number>, descripcion: <string> }
// }
// Usa métodos de arreglos (por ejemplo, map y find) para relacionar los ids de ventas con los objetos de clientes y productos.
// Mantene el mismo orden que en el arreglo ventas.
// No modifiques los arreglos originales.


// Ejercicio 4

const misproductos = [
    { id_producto: 1, descripcion: "Monopatin" },
    { id_producto: 2, descripcion: "Ropa" },
];
const clientes = [
    { id: 1, nombre: "Juan" },
    { id: 2, nombre: "Ludmila" },
    { id: 3, nombre: "maria" },
];

const ventas = [
    { cliente: 1, producto: 2 },
    { cliente: 2, producto: 1 },
    { cliente: 1, producto: 2 },
    { cliente: 3, producto: 1 },
];

const r = ventas.map(
    (v) => {
        return {
            cliente: clientes.find((c) => c.id === v.cliente),
            producto: misproductos.find((p) => p.id_producto === v.producto)
        };
    }
);
// Muestro la relación
console.log(r);

// Ordeno la relación por id de cliente.
const ordenados = r.sort((a, b) => b.cliente.id - a.cliente.id);
console.log(ordenados);


// Ejercicio 5:

const jugadores = [
    { id: 1, nombre: "Lucia", genero: "F", comision: "C1" },
    { id: 2, nombre: "Alonso", genero: "M", comision: "C1" },
    { id: 3, nombre: "Yamila", genero: "F", comision: "C2" },
    { id: 4, nombre: "Camila", genero: "F", comision: "C2" },
    { id: 5, nombre: "Leo", genero: "M", comision: "C1" },
];

const anotaciones = [
    { jugadorId: 1, goles: 2, asistencia: 5, tarjeta: 2 },
    { jugadorId: 2, goles: 1, asistencia: 5, tarjeta: 2 },
    { jugadorId: 3, goles: 3, asistencia: 5, tarjeta: 2 },
    { jugadorId: 4, goles: 1, asistencia: 5, tarjeta: 2 },
    { jugadorId: 1, goles: 1, asistencia: 5, tarjeta: 2 },
    { jugadorId: 5, goles: 2, asistencia: 5, tarjeta: 2 },
    { jugadorId: 2, goles: 2, asistencia: 5, tarjeta: 2 },
];

// Relacionar cada anotación con su jugador.
// map(), find()
// Analizo que identificador en común en ambas estructuras de datos.  Para este caso
// decidimos utilizar el array de objetos "anotaciones" para usar el map() y luego aplicar
// el un filtro sobre "jugadores".

const relacionCompletas = anotaciones.map(
    (a) => {

        const jugador = jugadores.find((j) => j.id === a.jugadorId);

        return {...a, "jugador": jugador };
    }
);

console.log(relacionCompletas);

// Ordenar por id de jugador
// const ordenados = relacionCompletas.sort((a, b) => a.jugador.id - b.jugador.id);
// console.log(ordenados);

// Obtener los goles totales por jugador.
const golesPorJugador = anotaciones.reduce(
    (acc, a) => {
        acc[a.jugadorId] = (acc[a.jugadorId] || 0) + a.goles;
        return acc;
    }, {}
);
//console.log(golesPorJugador);

// Convertimos el objeto "golesPorJugador" nuevamente a un array para poder ordenar/filtrar cómodamente
// Para ello usamos Object.entries para convertir el objeto { 1: 3, 2: 3, 3: 3, 4: 1, 5: 2 } en 
// un array de pares [clave, valor]
const ranking = Object.entries(golesPorJugador).map(([jugadorId, goles]) => {

    const jugador = jugadores.find((j) => j.id === Number(jugadorId));

    return { "jugador": jugador, "goles": goles };

});

console.log(ranking);