// ============================
// TRABAJO PRÁCTICO
// ============================

const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9, 100, 8, 99];

// 1. ¿Hay algún número mayor que 8?
console.log("Ejercicio 1:", lista.some((n) => n > 8)); // true

// 2. ¿Todos los números son mayores que 0?
console.log("Ejercicio 2:", lista.every((n) => n > 0)); // true

// 3. Buscar solo los pares
console.log("Ejercicio 3:", lista.filter((n) => n % 2 === 0));
// [4,2,4,8,6,10,2,100,8]

// 4. Calcular el cuadrado de cada número
console.log("Ejercicio 4:", lista.map((n) => n * n));

// 5. Obtener los > 3 y verificar si son todos pares
const mayores3 = lista.filter((n) => n > 3);
console.log("Ejercicio 5:", mayores3.every((n) => n % 2 === 0));

// 6a. Eliminar del array (copia) todos los > 6
console.log("Ejercicio 6a:", lista.filter((n) => n <= 6));

// 6b. Array de “par” / “impar”
console.log("Ejercicio 6b:", lista.map((n) => (n % 2 === 0 ? "par" : "impar")));

// 7. Filtrar >= 10 y luego pares
const arr2 = [3, 6, 6, 7, 12, 10, 4, 13, 1];
console.log("Ejercicio 7:", arr2.filter((n) => n >= 10).filter((n) => n % 2 === 0));
// [12,10]

// 8. Clonar con map y reemplazar > 10 por “X”
const Numbers = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1];
const copia = Numbers.map((x) => x);
console.log("Ejercicio 8:", copia.map((n) => (n <= 10 ? n : "X")));
// [1,2,3,3,1,5,6,"X",4,"X","X","X","X",7,1]
