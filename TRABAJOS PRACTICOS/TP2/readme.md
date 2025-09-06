Trabajo Práctico N° 2 - Solo utilizando el método reduce)
Teniendo en cuenta la siguiente lista: const nums = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10];
1) Calcular la suma de todos los elementos de la lista usando únicamente reduce.
2) Calcular la suma de los cuadrados de los números impares.
3) Teniendo en cuenta la siguiente lista de frases, deberás encontrar la frase más larga.
const frases = [
 "La tecnología cambia el mundo",
 "Programar es crear soluciones",
 "Aprender haciendo es aprender mejor",
 "JavaScript es flexible y poderoso"
];
4) Obtener del array “nums“, el mínimo y máximo de la lista en una sola pasada , retornando un objeto {min,
max}
Ayuda: El JavaScript existe un valor numérico especial denominado “Infinity”. Este tipo de numérico
representa al infinito positivo, pero si le antepones un guión, pasará a ser un infinito negativo “-Infinity”.
Entonces, podrías tomar como valor inicia lo siguiente {min: Infinity, max: -Infinity}. Esto se hace así porque
cualquier número será menor que Infinity y cualquier número será mayos a –Infinity.
5) Dada una lista de notas {curso, nota}, devolvé {curso: promedio} sin recorrer dos veces (acumulá sumas y
conteos en el mismo reduce).Entrada de ejemplo:
Lista = [
{c:"A",n:8},
{c:"B",n:6}, 
{c:"A",n:10}
]; // Salida esperada: { A:9, B:6 }
6) Dada el número de DNI de una persona, se pide calcular la suma de de sus números.
dni = '20385978'; Salida esperada: 42
7) Dado el siguiente texto const texto = "En la educación, el docente propone un proyecto breve: con
tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía
la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto
se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente
acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";
Se pide contar palabras incluidos los espacios que aparezcan texto.
Ayuda: El método reduce solo trabaja sobre arrays. Si tratara de usar de forma directa text.reduce esto
provocaría un error. Para poder salvar esta situación podemos convertir el String a un array de la siguiente
forma:
[… texto]. Reduce( ------ ) ;
Presta atención en los … aparecen antes de texto [… texto]. Esta expresión hace uso del operador spread
sobre un string y lo convierte a un array de caracteres. 