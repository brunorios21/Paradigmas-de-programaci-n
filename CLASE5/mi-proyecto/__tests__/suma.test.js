// mi-proyecto/__tests__/suma.test.js
const suma = (a, b) => a + b;

test('suma 2 + 3 es igual a 5', () => {
  expect(suma(2, 3)).toBe(5);
});