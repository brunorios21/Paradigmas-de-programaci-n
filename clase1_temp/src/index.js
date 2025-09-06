// creamos a y b
const a = 3;
const b = 4;

// creamos una funcion que sume a y b
const sumar = (x, y) => x + y; // sumar es una funcion que recibr dos parametros y regresa la suma de los dos

// usamos la funcion
const resultado = sumar(a, b); 
//Llamamos doble a la funcion sumar con los valores de a y b
const doble = (n) => n * n;
const calcular = (n) => (x) => n * x;
const res = calcular (2)(3);

console.log(res); //Imprime 6
//_______________________________________________
const funcionlineal = (fn, x ) => fn(x);
const t = funcionlineal((n) => n * 2, 3)
const t1 = funcionlineal((n) => n * 5, 2)
const t2 = funcionlineal((n) => n + 30, 5)
const t3 = funcionlineal((n) => n - 5, 12)

console.log("funcion testing T (1) = " + t1);
console.log("funcion testing T (2) = " + t2);
console.log("funcion testing T (3) = " + t3);
//_______________________________________________   
// Estructura - arrays
//metodos
// -some ()
// -every
// -filter
// -reduce

/*
    const arr = [1, 2, 3, 4, 5];
    const rest1 = arr.some((e) => e === 9); //verifica si al menos un elemento cumple la condicion
    console.log(arr);
    console.log(rest1); //Imprime false
    console.log(rest2); //Imprime true
/*
//_______________________________________________
// every: este metodo devuelve true/false si se cumplen en todos los elementos la condicion
const todosSon5 = arr.every((e)=> e === 5); //verifica si todos los elementos cumplen la condicion
console.log(todosSon5); //Imprime false
//_______________________________________________
// filter: este metodo retorna un nuevo array con todos los elementos que cumplan la condición
const nawarr = arr.filter((e)=> e ===9)
console.log(nawarr); //Imprime un array vacio [] porque no hay elementos que cumplan la condicion
//_______________________________________________
// reduce: este metodo aplica una funcion a cada elemento del array y devuelve un unico valor
const suma = arr.reduce((acc, e) => acc + e, 0); //suma todos los elementos del array
console.log(suma); //Imprime 15
//_______________________________________________
//map: lo que hace es recorrer el array y devuelve un nuevo array con los valores modificados
// map: este metodo aplica una funcion a cada elemento del array y devuelve un nuevo array con los valores modificados 
console.log("Array modificado..."); //imprime el array original [1, 2, 3, 4, 5]
const nawarr2 = arr.map((e)=>{
    return e * 2; //Multiplica cada elemento del array por 2
});
console.log(nawarr2); 

