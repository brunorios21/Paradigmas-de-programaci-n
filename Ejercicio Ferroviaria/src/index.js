console.log("\n\n************ My Proyecto Index *************\n");


const VagonPasajero = require("./model/VagonPasajero");
const VagonCarga = require("./model/VagonCarga");
const VagonDormitorio = require("./model/VagonDormitorio");
const Tren = require("./model/Tren");

// Creo mis vagones
const p1 = new VagonPasajero(10, 4, true, true);
const p2 = new VagonPasajero(7, 2, false, false);
const c1 = new VagonCarga(6800, 5);
const d1 = new VagonDormitorio(8, 3);

// Creo mi tren
const tren1 = new Tren();

// Agregar mis vagones al tren
tren1.agregarVagon(p1);
tren1.agregarVagon(p2);
tren1.agregarVagon(c1);
tren1.agregarVagon(d1); 


// Para poder recorrer lo que tiene cada vagón tras ejecutar cada uno de sus métodos...
console.log("\n== DETALLE DE CADA VAGON ==\n");
console.log(
    tren1.vagones.map(
        (v,i)=>{
            return {
              Vagón: i + 1,
              "Cantida Pasajeros": v.cantidadDePasajeros(),
              "Peso Maximo": v.pesoMaximo(),
              "Carga Maxima": v.cargaMaxima(),
              "Con Baño": v.conBanion(),
            };
        }
    )
);

// == Muestro los requerimientos ==
console.log("\n== REQUERIMIENTOS ==\n");
const resul = {
    "pasajeros" : tren1.pasajeros(), //1.
    "cantidadVagonesPopulares": tren1.cantidadVagonesPopulares(), //2. 
    "esFormacionCarguera": tren1.esFormacionCarguera(), //3. 
    "dispersionPesos": tren1.dispersionPesos(), //4. 
    "cantidadBanios": tren1.cantidadBanios(), //5
};
console.log(resul);


// == Muestro el punto extra ==
console.log("\n== PUNTO EXTRA ==\n");
const equilibrados = tren1.estaEquilibrada();
console.log(`La formación (Tren) esta equilibrada en pasajeros ?: ${equilibrados} \n`);


// == Hago mantenimiento a todos los vagones y muestro nuevamente los requerimientos == 
console.log("\n== HACIENDO MANTENIIENTO A TODOS LOS VAGONES... ==\n");
tren1.hacerMantenimiento();
const mantenimiento = {
  pasajeros: tren1.pasajeros(), //1.
  cantidadVagonesPopulares: tren1.cantidadVagonesPopulares(), //2.
  esFormacionCarguera: tren1.esFormacionCarguera(), //3.
  dispersionPesos: tren1.dispersionPesos(), //4.
  cantidadBanios: tren1.cantidadBanios(), //5
};
console.log(mantenimiento);





