//Funciones para pruebas basicas

const fsuma = (a,b) => a + b;

const elevarCuadrado = (arr) => {
    return arr.map((e) => e * e );
}
const sumaElementos = (lista) => {
    return lista.reduce((acc, n) => acc = acc += n);
}
//Funciones para probar mi dataStore series.json
const seriesDisponibles = (series) => {
    return series.filter((s) => s.disponible);
};
module.exports = {
    "fsuma":fsuma,
    "elevarCuadrado": elevarCuadrado,
    "sumarElementos": sumaElementos,
    seriesDisponibles: seriesDisponibles
}
