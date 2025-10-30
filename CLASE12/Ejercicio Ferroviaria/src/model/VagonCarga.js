const Vagon = require("./Vagon");

class VagonCarga extends Vagon {

  constructor(cargaMaximaIdeal, maderasSueltas) {
    super();
    this.cargaMaximaIdeal = cargaMaximaIdeal;
    this.maderasSueltas = maderasSueltas;
  }

  cargaMaxima() {
    return this.cargaMaximaIdeal - (400 * this.maderasSueltas);
  }

  cantidadDePasajeros() {
    return 0;
  }

  conBanion() {
    return false;
  }

  pesoMaximo() {
    return 1500 + this.cargaMaxima();
  }

  recibirMantenimiento() {
    this.maderasSueltas = Math.max(0, this.maderasSueltas - 2);
  }
}

module.exports = VagonCarga;
