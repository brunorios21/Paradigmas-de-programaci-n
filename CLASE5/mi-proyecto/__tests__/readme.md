# Proyecto Node.js con Jest

## 1. Preparar el proyecto Node.js  
Si todavía no tienes un proyecto creado:  
`mkdir mi-proyecto`  
`cd mi-proyecto`  
`npm init -y`  
Esto genera un archivo package.json básico.

## 2. Instalar Jest  
Instala Jest como dependencia de desarrollo:  
`npm install --save-dev jest`  
Verifica que se instaló correctamente:  
`npx jest --version`

## 3. Configurar script de test  
Edita tu package.json y agrega un script para ejecutar Jest:  
```json
"scripts": {
  "test": "jest"
}
Ahora puedes correr los tests con:
npm test
## 4. Crear un primer test
Crea una carpeta __tests__ (opcional, pero recomendado) y un archivo de prueba, por ejemplo:
Archivo: __tests__/suma.test.js
const suma = (a, b) => a + b;

test('suma 2 + 3 es igual a 5', () => {
  expect(suma(2, 3)).toBe(5);
});


const suma = (a, b) => a + b;

test('suma 2 + 3 es igual a 5', () => {
  expect(suma(2, 3)).toBe(5);
});

Ejecuta:
npm test
Deberías ver que Jest encuentra y ejecuta la prueba automáticamente.
¿Qué hace cada parte?
- test("...", fn) define un caso de prueba con una descripción y una función que contiene las aserciones.
- expect(valor) crea un objeto de expectativa sobre valor.
- .toBe(esperado) verifica que valor y esperado sean estrictamente iguales.
5. Instalar Jest Runner en VS Code
Abre Visual Studio Code.
Ve a la pestaña de Extensiones (Ctrl+Shift+X).
Busca "Jest Runner".
Instálalo (autor: firsttris).
6. Usar Jest Runner
Abre cualquier archivo de prueba (*.test.js o *.spec.js).
Ahora verás sobre cada test o describe un enlace "Run" o "Debug".
Haz clic para ejecutar pruebas individuales directamente desde el editor.
7. (Opcional) Configurar Jest Runner
Si tus tests no están en la carpeta por defecto o usas un nombre de script distinto:
Presiona Ctrl + , para abrir la configuración de VS Code.
Busca "Jest Runner Config".
Puedes agregar configuraciones como:
"jest.pathToJest": "npm test --"
"jest.pathToJest": "npm test --"


mi-proyecto/
├── __tests__/
│   └── suma.test.js
├── index.js
├── package.json
└── node_modules/