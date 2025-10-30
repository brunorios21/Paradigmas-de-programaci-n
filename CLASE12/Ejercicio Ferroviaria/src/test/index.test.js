const Tren = require("../model/Tren");
const VagonPasajero = require("../model/VagonPasajero");
const VagonCarga = require("../model/VagonCarga");
const VagonDormitorio = require("../model/VagonDormitorio");

/*
1. Un vagón de pasajeros de 10 metros de largo por 4 de ancho, ordenado, con baño.
2. Un vagón de pasajeros de 7 metros de largo por 2 de ancho, no ordenado, sin baño.
3. Un vagón de carga de 6800 kg de carga máxima ideal, y con 5 maderas sueltas.
4. Un vagón dormitorio de 8 compartimientos y 3 camas por compartimiento.
*/

describe("Test general de mi formación (Tren1)", () => {
  test("1. Un vagón de pasajeros de 10 metros de largo por 4 de ancho, ordenado, con baño.", () => {
    const p1 = new VagonPasajero(10, 4, true, true);

    expect(p1.cantidadDePasajeros()).toBe(100);
    expect(p1.pesoMaximo()).toBe(10300);
    expect(p1.cargaMaxima()).toBe(300);
    expect(p1.conBanion()).toBe(true);
  });

  test("2. Un vagón de pasajeros de 7 metros de largo por 2 de ancho, no ordenado, sin baño.", () => {
    const p2 = new VagonPasajero(7, 2, false, false);

    expect(p2.cantidadDePasajeros()).toBe(41);
    expect(p2.pesoMaximo()).toBe(6080);
    expect(p2.cargaMaxima()).toBe(800);
    expect(p2.conBanion()).toBe(false);
  });

  test("3. Un vagón de carga de 6800 kg de carga máxima ideal, y con 5 maderas sueltas.", () => {
    const c1 = new VagonCarga(6800, 5);

    expect(c1.cantidadDePasajeros()).toBe(0);
    expect(c1.pesoMaximo()).toBe(6300);
    expect(c1.cargaMaxima()).toBe(4800);
    expect(c1.conBanion()).toBe(false);
  });

  test("4. Un vagón dormitorio de 8 compartimientos y 3 camas por compartimiento.", () => {
    const d1 = new VagonDormitorio(8, 3);

    expect(d1.cantidadDePasajeros()).toBe(24);
    expect(d1.pesoMaximo()).toBe(7120);
    expect(d1.cargaMaxima()).toBe(1200);
    expect(d1.conBanion()).toBe(true);
  });

  /* TEST DE MANTENIMIENTO: Indicamos los resultados de valores después de hacer 
  el mantenimiento */

  test("Test de una Formación de 4 vagones", () => {
    const p1 = new VagonPasajero(10, 4, true, true);
    const p2 = new VagonPasajero(7, 2, false, false);
    const c1 = new VagonCarga(6800, 5);
    const d1 = new VagonDormitorio(8, 3);
    const tren = new Tren();

    tren.agregarVagon(p1);
    tren.agregarVagon(p2);
    tren.agregarVagon(c1);
    tren.agregarVagon(d1);

    expect(tren.pasajeros()).toBe(165);
    expect(tren.cantidadVagonesPopulares()).toBe(1);
    expect(tren.esFormacionCarguera()).toBe(false);
    expect(tren.dispersionPesos()).toBe(4220);
    expect(tren.cantidadBanios()).toBe(2);

    tren.hacerMantenimiento(); // cambia todo

    expect(tren.pasajeros()).toBe(180);
    expect(tren.cantidadVagonesPopulares()).toBe(2);
    expect(tren.esFormacionCarguera()).toBe(false);
    expect(tren.dispersionPesos()).toBe(3200);
    expect(tren.cantidadBanios()).toBe(2);
  });
});
