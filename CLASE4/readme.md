TEST con JS

¿Qué es testear? Es verificar automáticamente que el código haga lo que prometemos. Evita regresiones y acelera el desarrollo.

Tipos de pruebas (a grandes rasgos):

o    Unitarias: prueban funciones “chiquitas” en aislamiento.

o    Integración: prueban cómo se conectan varias piezas.

o    E2E: prueban el sistema “de punta a punta” como lo haría un usuario.

      Ejemplo práctico:

      o   Abrir la aplicación web.
      o   Loguearse.
      o   Navegar al carrito.
      o   Agregar un producto.
      o   Realizar la compra.
Verificar que llega el email de confirmación.
Eso es muy distinto a una prueba unitaria (solo testear, por ejemplo, si una función suma bien) o de integración (si el carrito calcula el total con descuentos).

¿Qué es Jest? 
Un framework de pruebas para JS/TS que trae todo en uno: 

runner (ejecutor), aserciones (expect + matchers), coverage, entre otras funcionalidades.

*** Usá el patrón AAA:

1. (Preparar): datos/estado inicial.

2. (Actuar): ejecutar la función a probar.

3. (Afirmar): aserción que verificar el resultado esperado con expect.

La Aserción es realizada mediante Matchers que básicamente nos permiten verificar si la afirmación se cumple --> el test pasa; si no --> el test falla. 

Ej.: “La función suma(2,3)  debe dar 5”.

Matchers básicos que vas a usar mucho:

toBe → igualdad estricta (===) en primitivos.
toEqual → igualdad profunda (objetos/arrays).
toHaveLength → igualdad por cantidad de elementos.
toContain → que un array/string contenga algo.
toThrow → que una función arroje error.
toBeCloseTo → números con decimales.
1. Preparar el proyecto Node.js
Si todavía no tienes un proyecto creado:

mkdir mi-proyecto
cd mi-proyecto
npm init -y
Esto genera un archivo package.json básico.

2. Instalar Jest
Instala Jest como dependencia de desarrollo:

npm install --save-dev jest
Verifica que se instaló correctamente:

npx jest --version
3. Configurar script de test
Edita tu package.json y agrega un script para ejecutar Jest:

"scripts": {
  "test": "jest"
}
Ahora puedes correr los tests con:

npm test
4. Crear un primer test
Crea una carpeta __tests__ (opcional, pero recomendado) y un archivo de prueba, por ejemplo:

// archivo: __tests__/suma.test.js
const suma = (a, b) => a + b;

test('suma 2 + 3 es igual a 5', () => {
  expect(suma(2, 3)).toBe(5);
});
Ejecuta:

npm test
Deberías ver que Jest encuentra y ejecuta la prueba automáticamente.

¿Que hace cada parte ?

test("...", fn) define un caso de prueba con una descripción y una función que contiene las aserciones.

expect(valor) crea un objeto de expectativa sobre valor.

.toBe(esperado) verifica que valor y esperado sean estrictamente iguales.



5. Instalar Jest Runner en VS Code
Abre Visual Studio Code.
Ve a la pestaña de Extensiones (Ctrl+Shift+X o Cmd+Shift+X en Mac).
Busca "Jest Runner".
Instálalo (autor: firsttris).
6. Usar Jest Runner
Abre cualquier archivo de prueba (*.test.js o *.spec.js).
Ahora verás sobre cada test o describe un enlace "Run" o "Debug".
Haz clic para ejecutar pruebas individuales directamente desde el editor.
7. (Opcional) Configurar Jest Runner
Si tus tests no están en la carpeta por defecto o usas un nombre de script distinto:

Presiona Ctrl + , para abrir la configuración de VS Code.
Busca Jest Runner Config.
Puedes agregar configuraciones como:
"jest.pathToJest": "npm test --"
