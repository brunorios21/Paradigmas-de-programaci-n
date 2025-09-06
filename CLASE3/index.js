//Operadores ternarios
//Lo lo que hace es evaluar una condición y dependiendo de si es true o false

function minimo (a, b) {
    if (a < b){
        return a;
       }else{
        return b;
    }
console.log(minimo(5,3));
}
//___________________________________________________________
//Otra forma de hacelro es con if else
// significa: la condicion ? if true : if false
//Opera sobre dos valores y devuelve uno de los dos
// en este caso devuelve a o b
const res = (a,b) => (a < b) ? a : b; // Significa que si a es menor que b devuelve a, sino devuelve b
console.log("El minimo es:",res);
const edad = 17; //Definimos una variable edad
//si la edad es mayor o igual a 18, permitir el acceso, si no, denegar el acceso
const acceso = (edad >= 18) ? "permitido" : "Denegado";
//Composicion de funciones permite que se ejecute una funcion dentro de otra
//Y esas hagan de parametro de una tercera función
//ejemplo
//const esPar = (numero) => numero % 2 === 0; //función que termina si un numero es par
//(p,q) => (x) => p(x) && q(x) es una función que recibe dos funciones y devuelve true si ambas son verdaderas
//ejemplo
const and = (p,q) => (x) => p(x) && q(x);
//función que recibe dos funciones y devuelve true si ambas son verdaderas (numero %2) significa que si el numero es par devuelve true
const esPar = (numero) => (numero % 2);
//Funcion que devuelve true si el numero es menor que 10
const esMenorQue10 = (numero) => numero < 10;
//Funcion que and esPar y esMenorQue10 
// Significa que si el numero es par y menor que 10 devuelve true

const paraMayorQue10 = and(esPar, esMenorQue10);
console.log(parMayorQue10(8));//devuelve true (8 es par y menor que 10)
//Funiones de order suoerior 
//Son funciones que reciben otras funciones como parametros
//Es decir que se tiene que cumplir alguna de las dos

//Funcion base
const operar = (n, f) => {
    return (x) => f(n, x); 
    //f(n, x) es una funcion que recibe dos parametros
}
