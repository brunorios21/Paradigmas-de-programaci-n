/*
TP2 – Ejercicios usando solo Array.prototype.reduce()
-----------------------------------------------------
Enunciado:
1) Calcular la suma de todos los elementos de la lista usando únicamente reduce.
2) Calcular la suma de los cuadrados de los números impares.
3) Dada una lista de frases, encontrar la frase más larga.
4) Obtener del array “nums” el mínimo y el máximo en una sola pasada, devolviendo { min, max }.
5) Dada una lista de notas {curso, nota}, devolver {curso: promedio} SIN recorrer dos veces
   (acumular sumas y conteos en el MISMO reduce).
6) Dado un DNI (string), calcular la suma de sus dígitos.
7) Dado un texto (string), contar la cantidad de caracteres INCLUYENDO espacios,
   usando spread sobre el string para poder aplicar reduce (…texto).

Notas clave sobre reduce():
- reduce(callback, valorInicial) recorre un array y acumula un resultado único.
- El callback se llama como (acumulador, elementoActual, indice, arregloCompleto).
- valorInicial define el tipo/forma del acumulador al empezar; si no se provee, el primer
  elemento del array será el acumulador inicial (a veces eso es correcto, a veces no).
*/

/***************************
 * Datos base del enunciado *
 ***************************/
const nums = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10]; //Lista de numeros 

const frases = [
  "La tecnología cambia el mundo",
  "Programar es crear soluciones",
  "Aprender haciendo es aprender mejor",
  "JavaScript es flexible y poderoso"
];

/****************************************
 * 1) Suma de todos los elementos (reduce)
 ****************************************/
/*
Idea:
- Usamos un acumulador numérico que inicia en 0.
- En cada paso sumamos el elemento actual (curr) al acumulador (acc).
*/
const suma = nums.reduce((acc, n) => acc + n, 0);
//Imrpimimos el resultado por consola
console.log("1) Suma total:", suma); // Esperado: 56

/******************************************************
 * 2) Suma de los cuadrados de los números impares
 ******************************************************/
/*
Idea:
- Mantenemos un acumulador numérico que inicia en 0.
- Si el número actual es impar (curr % 2 !== 0), acumulamos su cuadrado (curr ** 2).
- Si es par, no modificamos el acumulador.
*/
//const sumaCuadradosImpares = nums.filter(
  //(n) => (n % 2 !==0) Filtramos los numeros impares
//  (n) => (n % 2 !==0)
//);
// si uso.reduce
const sumaCuadradosImpares = nums.reduce((acc, n) => {
  //Lo que hace acc = acc + n es sumar n al acumulador 
  acc = acc + n;
  //Retornamos el acumulador
  return acc;
},0
);
//Otra forma de hacerlo es con map
//const sumaCuadradosImpares = nums
//  .filter(
//    (n) => (n % 2 !==0) // Filtramos los numeros impares [1, 5, 7, 9]
//  )
//  .map(
//    (n) => (n ** n) // Calculamos el cuadrado del numero [1, 25, 49, 81]
//  );
//Imprimimos el resultado por consola
//console.log("2) Suma de cuadrados de impares:", sumaCuadradosImpares); // Esperado: 156 (1^2 + 5^2 + 7^2 + 9^2)

/***********************************************
 * 3) Frase más larga (por cantidad de caracteres)
 ***********************************************/
/*
Idea:
- Usamos un acumulador que inicia como una cadena vacía "".
- En cada paso, comparamos la longitud de la frase actual (s) con la del acumulador (acc).
- Si s es más larga, actualizamos acc a s; si no, dejamos acc igual.
*/
//Lo que hace es comparar la longitud de cada frase (length) es la cantidad de caracteres
//.s es la frase actual
//.acc es la frase acumulada
//Si la longitud de s es mayor que la longitud de acc, acc toma el valor de s
//Si no, acc se mantiene igual
const fraseMasLarga = frases.reduce((acc, s) => {
        // si la longitud de s es mayor que la longitud de acc
        if (s.length > acc.length) acc = s;
        //retornamos el acumulador
        return acc;
});
//Imprimimos el resultado por consola
console.log("3) Frase más larga es: "); // Esperado: "Aprender haciendo es aprender mejor"

/*******************************************************
 * 4) Min y Max en una sola pasada -> { min, max }
 *******************************************************/
/*
Idea:
- El acumulador es un objeto con la forma { min, max }.
- Inicializamos como { min: Infinity, max: -Infinity } para que cualquier número real
  sea menor que Infinity y mayor que -Infinity.
- En cada iteración, ajustamos min y/o max comparando contra el valor actual.
*/
const minMax = nums.reduce(
  (acc, n) => {
  //
  if (n < acc.min) acc.min = d;
  if (n > acc.max) acc.max = d;
  return acc;
},
 { min: Infinity, max: -Infinity }
);
console.log("4) Min y Max:", minMax); // Esperado: { min: 1, max: 10 }

/****************************************************************************************
 * 5) Promedio de notas por curso SIN recorrer dos veces el arreglo de entrada
 ****************************************************************************************/
/*
Idea:
- Usamos un acumulador que es un objeto donde cada propiead es un curso.
- Cada curso acumula { sum, count } para luego calcular el promedio.
- Al final del reduce, transformamos el objeto para que cada curso tenga solo el promedio.
- Ejemplo: { A: { sum: 18, count: 2 }, B: { sum: 6, count: 1 } } => { A: 9, B: 6 }
- NOTA: El enunciado pide NO recorrer dos veces, así que todo se hace en un solo reduce.

*/
const lista = [
  { c: "A", n: 8 },
  { c: "B", n: 6 },
  { c: "A", n: 10 }
];
//Aquí usamos el operador de fusión nula (??) para inicializar en 0 si no existe aún 
const promedios = lista //Creamos una constante promedios que es igual a la lista
//.reduce recibe acc y {c,n} que son los elementos de la lista
  .reduce(
    // acc es el acumulador que empieza siendo un objeto vacio
    // {c,n} es el elemento actual que tiene dos propiedades c y n
    (acc, {c,n}) => {
      // !acc.sum[c] acc.sum es un objeto que tiene como propiedades los cursos
      //si no existe acc.sum[c] lo inicializa en 0
      //sum: 0, count: 0, promedio: 0 significa que si no existe el curso lo inicializa en 0
      if (!acc.sum[c])acc[c] = { sum: 0, count : 0, promedio: 0 };
      
      acc.sum[c] += n; //Sumamos la nota al curso
      acc.count[c] += 1; //Sumamos 1 al contador del curso
      acc.promedio[c] = acc.sum[c] / acc.count[c]; //Calculamos el promedio
      //retornamos el acumulador 
      return acc;
  },    {}
);//Al final devolvemos solo los promedios
//Imprimimos el resultado por consola

console.log("5) Promedios por curso:", promedios); // Esperado: { A: 9, B: 6 }

/**********************************************
 * 6) Suma de los dígitos de un DNI (string)
 **********************************************/
/*
Idea:
- Para aplicar reduce sobre un string, lo convertimos a array de caracteres con spread: [...dni].
- Acumulamos la suma de Number(char) en un acumulador numérico iniciado en 0.
- Ejemplo: '20385978' => 2+0+3+8+5+9+7+8 = 42
*/
const dni = "20385978";
const sumaDNI = [...dni].reduce((acc, n) => { 
  acc = Number(acc) + Number(n);
  return acc;
});//Valor inicial es 0
console.log("6) Suma de dígitos del DNI:", sumaDNI); // Esperado: 42
//El que anda ""
//_____________________________________________________________
//Otra forma de hacerlo es con el operador de propagación (spread operator) 
//que convierte el string en un array de caracteres
//Y luego usamos reduce para sumar los dígitos
//const dni = "20385978";
//const sumaDNI = [...dni].reduce((acc, n) => { 
//  return acc + Number(n);  // acc ya arranca en 0
//}, 0); // valor inicial

//console.log("6) Suma de dígitos del DNI:", sumaDNI); 
// Esperado: 42

/*******************************************************************************************
 * 7) Contar caracteres (INCLUYENDO espacios) usando spread para poder aplicar reduce
 *******************************************************************************************/
//
//Importante:
//7) Dado el siguiente texto const texto = "En la educación, el docente propone un proyecto breve: con
//tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía
//la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto
//se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente
//acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";
//Se pide contar palabras que aparezcan texto.
//Ayuda: El método reduce solo trabaja sobre arrays. Si tratara de usar de forma directa text.reduce esto
//provocaría un error. Para poder salvar esta situación podemos convertir el String a un array de la siguiente
//forma:
//texto.split(/\s+/); 
//const texto = "En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";
const cadena = "En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";
//Convertimos el string en un array de caracteres usando el operador de propagación (spread operator)
const contarCaracteres = texto.split(/\s+/)((acc, n) => {
  acc = acc + 1;
  return acc;
},0);

console.log("7) Cantidad de caracteres (incluyendo espacios):", contarCaracteres); // Esperado: 446
//Otra forma de hacerlo es con length
//console.log("7) Cantidad de caracteres (incluyendo espacios):", cadena.length); // Esperado: 446

/***********************************************