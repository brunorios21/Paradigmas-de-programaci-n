const arr1 = [];
//Relleno el "arr1" con n cantidad de elementos aleatorios
const rango = (n) =>[...Array(n).keys()];

const maxElement = 10;
rango(maxElement).forEach((Element)=>{
    let value = Math.floor(Math.random() * maxElement);
    arr1.push(value);
});
console.log(arr1);
//Tenemos un arr2 de tipos de datos diferentes
const arr2 = [-6,-7,-8,-9,-10];
//Tenemos un arr3 de los dos anteriores concatenados
const arr3 = [...arr1, ...arr2];
//Tenemos un arr3 de los dos anteriores concatenados
console.log(arr3);
//Tenemos una constante con el maximo y el minimo de los elementos de arr3
const maximo = Math.max(...arr3);
const minimo = Math.min(...arr3)

console.log(`el maximo es ${maximo} y el minimo es ${minimo}`);

//Sumar todos los elementos usando reduce
const sumarElementos = (...args) => {
    return args.reduce((acc,e)=> (acc = acc  + e), 0);

}
console.log("La suma de los elementos reduce es;" + sumarElementos(...arr3));

// Separar los positivos de los negativos
const separados = arr3.reduce(
    (acc, n)=> {
    (n<0 ? acc.negativos : acc.positivos).push(n);
    return acc; 
    }, {negativos:[], positivos: []}
);
//imprimimos los resultados
//Lo que hace el sort es al recibir una función de comparación, 
//lo que hace es comparar dos elementos y devuelve un número negativo, 
// un número positivo o cero o positivo dependiendo de si el primer elemento es menor, igual o mayor que el segundo.
console.log("Numeros negativos:" + separados.negativos.sort((a,b) => a - b));
console.log("Numeros positivos:" + separados.positivos.sort());