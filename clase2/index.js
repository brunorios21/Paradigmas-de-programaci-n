//Operadores ternarios
//function minimo (a, b) {
//    if (a < b){
//        return a;
//       }else{
//        return b;
//    } 
//___________________________________________________________
//Otra forma de hacerlo con if else
//}
//Otra forma de hacerlo con operador ternario
//Significa: la condicion ? if true : if false
//Opera sobre dos valores y devuelve uno de los dos
// en este caso devuelve a o b
//const res = (a,b) => (a < b) ? a : b;

//console.log("El minimo es:",res);
//const edad = 17;
//const acceso = (edad >= 18) ? "permitido" : "Denegado";
//console.log("acceso", acceso);
//composicion de funciones permite reutilizar codigo
// ES PODER TENER FUNCIONES DENTRO DE OTRAS FUNCIONES
//Y ESAS HAGAN DE PARAMETRO DE UNA TERCERA FUNCION
//Ejemplo
//const esPar quiere decir que si el numero es par devuelve 0
//si es impar devuelve 1
const and = (p,q) => (x) => p(x) && q(x);
const esPar = (numero) => (numero % 2);
const esMenorQue10 = (numero) => numero < 10;
//const parMayorQue10 = (numero) => esPar(numero) && esMenorQue10(numero);
const parMayorQue10 = and(esPar, esMenorQue10);
console.log(parMayorQue10(8));
//Funciones de orden superior
//Son funciones que reciben otras funciones como parametros
//RECIBEN COMO PARAMETRO UNA FUNCION Y/O DEVUELVEN UNA FUNCION
//eS DECIR QUE SE TIENE QUE CUMPLIR UNA DE LAS DOS

//FUNCION BASE

const operar = (n, f) => {
    return (x) => f(n) + x;
}
//__________________________________________________________
//FUNCIONES QUE SE USAN COMO PARAMETRO
//suma 1 o resta 1
const moverDerecha = (n) => n + 1;
const moverIzquierda = (n) => n - 1;
// mx y my son funciones que se crean a partir de operar
const mx = operar(5, moverDerecha); 
const my = operar(5, moverIzquierda); 
console.log(mx(10));// 16
console.log(my(10));// 14
//Otra forma de llamarlo sin crear las variables mx y my
console.log(operar(5, moverDerecha)(10)
);// 1
//__________________________________________________________
//Otra forma de hacerlo
//funcion f1 que recibe dos numeros y una funcion
//la funcion f2 que suma 1
// const f2 = (n) => n + 1;
// const f1 = (x,y,f) => {
//     let r = x + y + f(x);
//     return r;
// }
// console.log(f1(1,2,f2));//5
//____________________________________________________________
//Lo que hace es sumar 1 a x y luego sumar x + y + f(x)
//Entonces al hacer esto ir devolviendo el resultado
// const suma = (x,y) => x + 1;
// const duplicar = (f) => (x) => f(f(x));

// console.log(duplicar(suma)(5));//7 
// //otra forma de usar duplicar
// const fun = duplicar(suma);
// console.log(fun);//7
//____________________________________________________________
//nOS FALTÓ UN MÉTODO REDUCE (DE LA CLASE ANTERIOR)
//reduce hasta un valor unico
//reduce recibe dos parametros una funcion y un valor inicial(opcional)
// const array = [1,2,3,4]; //array de 4 elementos
// //la funcion que recibe reduce tiene 4 parametros
// const resultado = array.reduce((acc, curr, i, arr) => {
//     console.log({acc, curr, i, arr});
//     return acc + curr;
// }, 0);//valor inicial 0 
// console.log(redu);
// // Por ahora usaremos acumulador y valor actual
// //El valor inicial es opcional
// //Si no se pone el valor inicial, el acumulador empieza en el primer elemento
// const initValue = 0;

// const suma = array.reduce(
//     (acc, curr) => acc + curr, initValue
// );
// console.log(suma);//10
//____________________________________________________________
//Este ejemplo es unir cada frase con un guion medio
const value = ["hola,","mundo","JavaScript"].reduce(
    (acc, w, indice) => (i ? acc + "-" + w : w), //Si indice es 0 no pone el guion
    0 //Valor inicial

);
console.log(value);//hola,-mundo-JavaScript
//____________________________________________________________
//Creamos un array con valores duplicados
//Y con reduce eliminamos los duplicados
// const items = [1,2,3,1,2,4,8,7]
// //El acumulador empieza siendo un array vacio
// //Si el acumulador no incluye el item lo añade
// const noDuplicados = items.reduce(
//     //funcion que recibe el acumulador y el item
//     (acc, item) => {
//     //Si el acumulador no incluye el item lo añade
//         if (!acc.includes(item)){
//         //acc.push añade un elemento al final del array
//             acc.push(item);
//         }
//       return acc;
//     }, [] 

// );//Valor inicial es un array vacio
// console.log(items);//[1,2,3,1,2,4,8,7]
// console.log(noDuplicados);//[1,2,3,4,8,7]
//____________________________________________________________
//Contar la caantidad de ocurrencias que hay en una lista de frutas
const frutas = ['manzana', 'pera', 'naranja', 'manzana', 'banana', 'uva'];
//El acumulador empieza siendo un objeto vacio
//Si el acumulador no incluye la fruta la añade con valor 1
const contar = arr.reduce (
    //Funcion que recibe el acumulador y la fruta
// currentValue es la fruta actual
(acc, currentValue) => {
    //si el acumulador no incluye la fruta la añade con valor 1
    //si ya existe la fruta le suma 1
    acc[currentValue] = (acc[currentValue] || 0) + 1;
    return acc; 

}, {}
);
console.log(contar);//{manzana: 2, pera: 1, naranja: 1, banana: 1, uva: 1}
//____________________________________________________________
//Creamos un objeto con sus atributos

const persona = {
    //atributos
    nombre : "Juan", 
    edad : 30,
    ciudad : "Madrid",
    profesion :"Desarrollador",
    caso: false,
    antiguedad: 5

};
console.log(persona);
//Acceder a los atributos del objeto
console.log(persona.nombre);//Juan
persona.nombre = "Pedro";
console.log(persona.nombre);//Pedro
//creamos un objeto nuevo
persona = {};

//____________________________________________________________
const ejemplo = {
    //atributos
    nombre: "saludar",
    //metodo que es una funcion
    fn: () => console.log("Hola")

};
ejemplo.fn();//Hola
//____________________________________________________________
const fns = [
    //Lo que tenemos es un array de objetos
    {
        name : "Doble",
        fn : (x) => x * 2

    }
    ,
    {
        name : "cuadrado",
        fn : (x) => x * x,
    }
    {
        name : "suma5",
        fn : (x) => x + 5,
    },
];
const result = fns.map( ( {name, fn } ) =>{
    return {
         nombre: name
         apellido: name + "apellido",
    }
} );
console.log(result);
//____________________________________________________________