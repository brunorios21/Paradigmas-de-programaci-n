const {fsuma, elevarCuadrado, sumarElementos} = require("../libs/func")

//Crear mis test básicos

describe ("Testear mis funciones básicas...",()=>{

    test("Pruebo la funcion de suma con dos numeros positivos",()=>{

        expect(fsuma(2,3)).toBe(5);
    });
    

test("Pruebo la funcion de suma con dos numeros negativos", ()=>{
    expect(fsuma(-5,-3)).toBe(-8);
    });

    test("Testeo la función cuadrado con un solo elemento",()=>{
        const valores = [2];
        expect(elevarCuadrado(valores)).toEqual([4]);
    });

});