//const numeros = [10, 20, 30, 40];
//Para bucar un elemento se usa findIndex
// Si no encuentra el elemento, devuelve -1
// Si lo encuentra, devuelve el índice del elemento
//const indice = numeros.findIndex(n => n === 30);
//Si el indice es distinto de -1, elimina el elemento
//if (indice !== -1) {
    //.splice elimina elementos del array
    // (indice, 2) significa que empieza en la posición indice y elimina 2 elementos
//  numeros.splice(indice, 2); // elimina 1 elemento en esa posición
//}
//console.log(numeros); // [10, 20, 40]

const numeros = [1, 2, 3, 4];
//Usamos reduce para sumar todos los elementos del array
//(acumulador, n) => acumulador + n es la función que se aplica
//El valor inicial del acumaldor es 0
const suma = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log(suma); // 10